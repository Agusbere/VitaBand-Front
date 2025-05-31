import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (emailSent && !canResend) {
      timerRef.current = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [emailSent, canResend]);

  const handleSendEmail = () => {
    setEmailSent(true);
    setCanResend(false);
    setResendTimer(30);
    // Aquí tu lógica de envío de email
  };

  const handleResend = () => {
    setCanResend(false);
    setResendTimer(30);
    // Aquí tu lógica de reenvío de email
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F7F7F7" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.absoluteCloseButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.closeCircle}>
            <Ionicons name="close" size={18} color="#007FFF" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>
          Reset Your <Text style={styles.titleBlue}>Password</Text>
        </Text>

        <Text style={styles.subtitle}>
          <Text style={styles.subtitleBold}>Forgot your password?</Text> No worries, then let’s submit password reset. It will be sent to your email.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              underlineColorAndroid="transparent"
              editable={!emailSent}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: emailSent ? '#A0CFFF' : '#007FFF' },
          ]}
          onPress={handleSendEmail}
          disabled={emailSent || !email}
        >
          <Text style={styles.buttonText}>
            {emailSent ? 'Email sent' : 'Send Email'}
          </Text>
        </TouchableOpacity>

        {emailSent && (
          <TouchableOpacity
            style={[
              styles.resendButton,
              { backgroundColor: canResend ? '#007FFF' : '#E6F0FA' },
            ]}
            onPress={handleResend}
            disabled={!canResend}
          >
            <Text style={[
              styles.resendButtonText,
              { color: canResend ? '#fff' : '#007FFF' }
            ]}>
              Resend Email{!canResend ? ` (${resendTimer}s)` : ''}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  absoluteCloseButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 18,
    zIndex: 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  closeCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E6F0FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
    alignSelf: 'center',
  },
  titleBlue: {
    color: '#007FFF',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    fontFamily: 'PlusJakartaSans-Regular',
    marginBottom: 22,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 18,
    maxWidth: 300,
  },
  subtitleBold: {
    color: '#222',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  inputContainer: {
    width: '85%',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#222',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginBottom: 8,
    marginLeft: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    width: '100%',
  },
  inputIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 44,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#333',
    fontSize: 14,
    outlineWidth: 0,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 25,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginTop: 18,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 15,
  },
  resendButton: {
    flexDirection: 'row',
    borderRadius: 25,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginTop: 8,
  },
  resendButtonText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 15,
  },
});

export default ForgotPassword;
