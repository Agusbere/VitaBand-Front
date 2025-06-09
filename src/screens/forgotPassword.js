import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import CloseButton from '../navigation/closeButton.js';
import GoBackButton from '../navigation/goBackButton.js';
import EmailInput from '../components/loginComponents/inputEmail.js';
import SendEmailButton from '../components/forgotPasswordComponents/sendEmail.js';
import ResendEmailButton from '../components/forgotPasswordComponents/resendEmailButton.js';

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
    // lógica para enviar email
  };

  const handleResend = () => {
    setCanResend(false);
    setResendTimer(30);
    // lógica para reenviar email
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
      <CloseButton>
        <GoBackButton onPress={() => navigation.goBack()} />
      </CloseButton>

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>
          Reset Your <Text style={styles.titleBlue}>Password</Text>
        </Text>

        <Text style={styles.subtitle}>
          <Text style={styles.subtitleBold}>Forgot your password?</Text> No worries, then let’s submit password reset. It will be sent to your email.
        </Text>

        <EmailInput value={email} onChangeText={setEmail} editable={!emailSent} />

        <SendEmailButton
          onPress={handleSendEmail}
          disabled={emailSent || !email}
          emailSent={emailSent}
        />

        {emailSent && (
          <ResendEmailButton
            onPress={handleResend}
            canResend={canResend}
            resendTimer={resendTimer}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
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
});

export default ForgotPassword;
