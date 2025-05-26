import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const bounceAnimations = [];

    const scaleSteps = [1.5, 2, 3, 20];

    scaleSteps.forEach((scaleValue, index) => {
      bounceAnimations.push(
        Animated.spring(scaleAnim, {
          toValue: scaleValue,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
          delay: index * 300,
        })
      );
    });

    Animated.sequence(bounceAnimations).start(() => {
      navigation.replace("HomeTabs");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "#05D2FF",
    borderRadius: 50,
  },
});

export default SplashScreen;
