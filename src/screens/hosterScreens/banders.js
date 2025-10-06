import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/bandersComponents/searchBar.js';
import BanderCard from '../../components/bandersComponents/banderCard.js';
import RequestModal from '../../components/bandersComponents/requestModal.js';
import genericFetch from '../../utils/genericFetch.js';

const Banders = () => {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('all');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const debounceRef = useRef(null);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
    },
    header: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 8,
      flexDirection: 'row',
      gap: 8,
    },
    tab: {
      flex: 1,
      height: 38,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E5E7EB',
    },
    tabActive: {
      backgroundColor: '#3B82F6',
    },
    tabText: {
      fontFamily: 'PlusJakartaSans-Bold',
      color: '#111827',
    },
    tabTextActive: {
      color: '#fff',
    },
    empty: {
      padding: 24,
      alignItems: 'center',
    },
    emptyText: {
      fontFamily: 'PlusJakartaSans-Regular',
      color: '#6B7280',
    }
  }), []);

  const runSearch = async (text) => {
    if (!text || text.length === 0) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const endpoint = tab === 'all' ? `/api/relations/search-users?q=${encodeURIComponent(text)}` : `/api/relations/search-confirmed?q=${encodeURIComponent(text)}`;
      const data = await genericFetch(endpoint, 'GET');
      setResults(Array.isArray(data) ? data : []);
    } catch (e) {
      console.log('search error', e?.message);
    } finally {
      setLoading(false);
    }
  };

  const onChangeQuery = (text) => {
    setQuery(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      runSearch(text);
    }, 300);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await runSearch(query);
    setRefreshing(false);
  };

  const sendRequest = async () => {
    if (!selectedUser) return;
    try {
      const body = { target_user_id: selectedUser.id, id_rels: 1 };
      await genericFetch('/api/relations', 'POST', body);
      Alert.alert('Solicitud enviada', 'El usuario recibirá tu invitación');
      setSelectedUser(null);
    } catch (e) {
      Alert.alert('Error', 'No se pudo enviar la solicitud');
    }
  };

  useEffect(() => {
    if (query) runSearch(query);
  }, [tab]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={query} onChangeText={onChangeQuery} placeholder={tab === 'all' ? 'Buscar usuarios' : 'Buscar mis banders'} />
      <View style={styles.header}>
        <View style={[styles.tab, tab === 'all' && styles.tabActive]}
          onStartShouldSetResponder={() => true}
          onResponderRelease={() => setTab('all')}>
          <Text style={[styles.tabText, tab === 'all' && styles.tabTextActive]}>Todos</Text>
        </View>
        <View style={[styles.tab, tab === 'confirmed' && styles.tabActive]}
          onStartShouldSetResponder={() => true}
          onResponderRelease={() => setTab('confirmed')}>
          <Text style={[styles.tabText, tab === 'confirmed' && styles.tabTextActive]}>Mis banders</Text>
        </View>
      </View>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {results.length === 0 && !loading ? (
          <View style={styles.empty}><Text style={styles.emptyText}>Sin resultados</Text></View>
        ) : (
          results.map((u) => (
            <BanderCard key={`${u.id}`} user={u} onPress={tab === 'all' ? setSelectedUser : undefined} />
          ))
        )}
      </ScrollView>
      <RequestModal
        visible={!!selectedUser}
        user={selectedUser}
        onConfirm={sendRequest}
        onCancel={() => setSelectedUser(null)}
      />
    </SafeAreaView>
  );
};

export default Banders;