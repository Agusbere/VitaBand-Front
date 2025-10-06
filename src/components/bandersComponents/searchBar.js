import React, { useMemo } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder = 'Search' }) => {
    const styles = useMemo(() => StyleSheet.create({
        container: {
            width: '100%',
            paddingHorizontal: 16,
            marginTop: 12,
            marginBottom: 8,
        },
        input: {
            backgroundColor: '#fff',
            borderRadius: 16,
            paddingHorizontal: 16,
            height: 44,
            borderWidth: 1,
            borderColor: '#E5E7EB',
            fontFamily: 'PlusJakartaSans-Regular',
            color: '#111827',
        },
    }), []);

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

export default SearchBar;


