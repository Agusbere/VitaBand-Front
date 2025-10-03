import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import GoBackButton from '../../navigation/goBackButton';
import { uploadFile } from '../../utils/genericFecthImage';

const OnBoardingExtraData2 = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos', 'Se requieren permisos para acceder a tus imágenes.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.9,
    });
    if (!result.canceled && result.assets && result.assets[0]) {
      const asset = result.assets[0];
      setSelectedImage({ uri: asset.uri, name: asset.fileName || 'profile.jpg', type: asset.mimeType || 'image/jpeg' });
    }
  };

  const handleSkip = () => {
    navigation.replace('OnBoardingExtraData3');
  };

  const handleContinue = async () => {
    if (!selectedImage) return;
    try {
      setUploading(true);
      await uploadFile('/api/users/extra-data-2', selectedImage, 'image', {}, 'PUT');
      navigation.replace('OnBoardingExtraData3');
    } catch (err) {
      Alert.alert('Error', 'No se pudo guardar la foto.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GoBackButton onPress={() => navigation.replace('OnBoardingExtraData1')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Add a profile picture</Text>
        <TouchableOpacity style={styles.imageBox} onPress={pickImage} activeOpacity={0.85}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage.uri }} style={styles.preview} />
          ) : (
            <Image source={require('../../../assets/images/insertImage.png')} style={styles.placeholderImage} />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage} activeOpacity={0.85}>
          <Ionicons name="cloud-upload-outline" size={18} color="#fff" />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip} activeOpacity={0.9}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.continueButton, (!selectedImage || uploading) && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={!selectedImage || uploading}
          activeOpacity={0.9}
        >
          <Text style={styles.continueText}>{uploading ? 'Uploading...' : 'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#222',
    marginBottom: 16,
  },
  imageBox: {
    width: 260,
    height: 260,
    borderRadius: 18,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    opacity: 0.8,
  },
  preview: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  uploadButton: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#007FFF',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  uploadText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 14,
    marginLeft: 6,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  skipButton: {
    flex: 1,
    height: 48,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#94A3B8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  skipText: {
    color: '#334155',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
  continueButton: {
    flex: 1,
    height: 48,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007FFF',
  },
  buttonDisabled: {
    backgroundColor: '#93C5FD',
  },
  continueText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
});

export default OnBoardingExtraData2;