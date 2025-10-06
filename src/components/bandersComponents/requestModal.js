import React, { useMemo } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RequestModal = ({ visible, user, onConfirm, onCancel }) => {
    const styles = useMemo(() => StyleSheet.create({
        backdrop: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.35)',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            width: '86%',
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 20,
        },
        title: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontSize: 16,
            color: '#111827',
            marginBottom: 6,
        },
        subtitle: {
            fontFamily: 'PlusJakartaSans-Regular',
            fontSize: 13,
            color: '#6B7280',
            marginBottom: 16,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 12,
        },
        btnPrimary: {
            backgroundColor: '#3B82F6',
            borderRadius: 12,
            height: 42,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnSecondary: {
            backgroundColor: '#F3F4F6',
            borderRadius: 12,
            height: 42,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnTextPrimary: {
            color: '#fff',
            fontFamily: 'PlusJakartaSans-Bold',
        },
        btnTextSecondary: {
            color: '#111827',
            fontFamily: 'PlusJakartaSans-Bold',
        },
        actions: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 8,
        }
    }), []);

    const displayName = user?.name || user?.surname
        ? `${user?.name || ''} ${user?.surname || ''}`.trim()
        : user?.mail;

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.backdrop}>
                <View style={styles.content}>
                    <Text style={styles.title}>Enviar solicitud</Text>
                    <Text style={styles.subtitle}>{displayName}</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={onCancel} style={[styles.btnSecondary, { marginRight: 8 }]} activeOpacity={0.9}>
                            <Text style={styles.btnTextSecondary}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onConfirm} style={styles.btnPrimary} activeOpacity={0.9}>
                            <Text style={styles.btnTextPrimary}>Send Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default RequestModal;


