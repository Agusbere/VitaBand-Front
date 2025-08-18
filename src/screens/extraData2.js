import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import ProfileImageSelector from '../components/extraDataComponents/ProfileImageSelector';
import BotonPrincipal from '../components/loginComponents/botonPrincipal';
import genericFetch from '../utils/genericFetch';

const ExtraData2 = ({ route, navigation }) => {
    const { userId, mail } = route.params;
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const selectImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission needed', 'Please grant permission to access your photos.');
                return;
            }
        }

        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
                base64: true,
            });

            if (!result.canceled) {
                setProfileImage(result.assets[0]);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to select image. Please try again.');
        }
    };

    const handleSkip = () => {
        navigation.navigate('ExtraData3', { userId, mail });
    };

    const handleContinue = async () => {
        if (!profileImage) {
            Alert.alert('No image selected', 'Please select a profile image or skip this step.');
            return;
        }

        setLoading(true);

        try {
            const base64Image = `data:image/jpeg;base64,${profileImage.base64}`;
            
            const response = await genericFetch('/api/users/extra-data-2', 'PUT', {
                picture: base64Image
            });

            if (response) {
                navigation.navigate('ExtraData3', { userId, mail });
            }
        } catch (error) {
            Alert.alert("Error", "Failed to upload image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

            <Text style={styles.title}>Profile Picture</Text>
            <Text style={styles.subtitle}>Add a profile picture (optional)</Text>

            <View style={styles.content}>
                <ProfileImageSelector
                    imageUri={profileImage?.uri}
                    onImageSelect={selectImage}
                />

                <TouchableOpacity 
                    style={styles.uploadButton}
                    onPress={selectImage}
                >
                    <Ionicons name="cloud-upload" size={20} color="#3B82F6" />
                    <Text style={styles.uploadButtonText}>UPLOAD IMAGE</Text>
                </TouchableOpacity>

                <Text style={styles.description}>
                    This helps others recognize you. You can skip this step if you prefer.
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={[styles.skipButton, profileImage && styles.skipButtonDisabled]}
                    onPress={handleSkip}
                    disabled={loading}
                >
                    <Text style={[styles.skipButtonText, profileImage && styles.skipButtonTextDisabled]}>
                        SKIP
                    </Text>
                </TouchableOpacity>

                <BotonPrincipal
                    texto={loading ? "Uploading..." : "CONTINUE"}
                    onLogin={handleContinue}
                    loading={loading}
                    disabled={!profileImage || loading}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        padding: 10,
    },
    title: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#333',
        marginTop: 40,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#3B82F6',
    },
    uploadButtonText: {
        color: '#3B82F6',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 14,
        marginLeft: 8,
    },
    description: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Regular',
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    buttonsContainer: {
        marginBottom: 40,
    },
    skipButton: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    skipButtonDisabled: {
        opacity: 0.5,
    },
    skipButtonText: {
        color: '#3B82F6',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
    },
    skipButtonTextDisabled: {
        color: '#ccc',
    },
});

export default ExtraData2;
