import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(-150)).current; // Empieza fuera de la pantalla arriba

  useEffect(() => {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: height / 2 - 50,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.5,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 2,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 3,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 20,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.replace("HomeTabs");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circleWrapper,
          {
            transform: [
              { translateY: translateYAnim },
              { scale: scaleAnim },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['#05D2FF', '#3787E5']}
          style={styles.circle}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  circleWrapper: {
    position: "absolute",
    left: width / 2 - 50,
    width: 100,
    height: 100,
    zIndex: 2,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default SplashScreen;
