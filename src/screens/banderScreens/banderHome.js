import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import genericFetch from '../../utils/genericFetch.js';

const Home = () => {
    const [invitations, setInvitations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const styles = useMemo(() => StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: 16,
            marginHorizontal: 16,
            paddingVertical: 14,
            paddingHorizontal: 16,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#E5E7EB',
        },
        title: {
            fontFamily: 'PlusJakartaSans-SemiBold',
            fontSize: 16,
            color: '#111827',
            marginBottom: 6,
        },
        subtitle: {
            fontFamily: 'PlusJakartaSans-Regular',
            fontSize: 13,
            color: '#6B7280',
            marginBottom: 10,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        btnPrimary: {
            backgroundColor: '#10B981',
            borderRadius: 12,
            height: 40,
            paddingHorizontal: 14,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 8,
        },
        btnDanger: {
            backgroundColor: '#EF4444',
            borderRadius: 12,
            height: 40,
            paddingHorizontal: 14,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnText: {
            color: '#fff',
            fontFamily: 'PlusJakartaSans-Bold',
        },
        headerActions: {
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 4,
            alignItems: 'flex-end',
        },
        acceptAll: {
            backgroundColor: '#3B82F6',
            borderRadius: 16,
            height: 40,
            paddingHorizontal: 14,
            alignItems: 'center',
            justifyContent: 'center',
        },
        acceptAllText: {
            color: '#fff',
            fontFamily: 'PlusJakartaSans-Bold',
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

    const fetchPending = async () => {
        setLoading(true);
        try {
            const data = await genericFetch('/api/relations/pending', 'GET');
            setInvitations(Array.isArray(data) ? data : []);
        } catch (e) {
            console.log('pending error', e?.message);
        } finally {
            setLoading(false);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchPending();
        setRefreshing(false);
    };

    const accept = async (id_host) => {
        try {
            await genericFetch('/api/relations/confirm', 'PATCH', { id_host });
            await fetchPending();
        } catch (e) {
            Alert.alert('Error', 'No se pudo aceptar');
        }
    };

    const reject = async (id_host) => {
        try {
            await genericFetch('/api/relations/deny', 'PATCH', { id_host });
            await fetchPending();
        } catch (e) {
            Alert.alert('Error', 'No se pudo rechazar');
        }
    };

    const acceptAll = async () => {
        try {
            await genericFetch('/api/relations/confirm-all', 'PATCH');
            await fetchPending();
        } catch (e) {
            Alert.alert('Error', 'No se pudo confirmar todas');
        }
    };

    useEffect(() => {
        fetchPending();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerActions}>
                <TouchableOpacity onPress={acceptAll} style={styles.acceptAll} activeOpacity={0.9}>
                    <Text style={styles.acceptAllText}>Aceptar todas</Text>
                </TouchableOpacity>
            </View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {invitations.length === 0 && !loading ? (
                    <View style={styles.empty}><Text style={styles.emptyText}>No tienes invitaciones pendientes</Text></View>
                ) : (
                    invitations.map((inv) => (
                        <View key={`${inv.id}`} style={styles.card}>
                            <Text style={styles.title}>{inv.host_name || inv.name || 'Hoster'}</Text>
                            <Text style={styles.subtitle}>{inv.host_mail || inv.mail || ''}</Text>
                            <View style={styles.row}>
                                <TouchableOpacity onPress={() => reject(inv.id_host)} style={styles.btnDanger} activeOpacity={0.9}>
                                    <Text style={styles.btnText}>Reject</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => accept(inv.id_host)} style={styles.btnPrimary} activeOpacity={0.9}>
                                    <Text style={styles.btnText}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;