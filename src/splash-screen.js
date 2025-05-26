import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    const bounces = [
      Animated.spring(scaleAnim, {
        toValue: 1.5,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 2.5,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 4,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 10,
        friction: 3,
        useNativeDriver: true,
      }),
    ];

    Animated.sequence(bounces).start(() => {
      navigation.replace("HomeTabsNavigator");
    });
  }, []);

  return (
    <View style={styles.fondo}>
      <Animated.View
        style={[
          styles.circuloContenedor,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <LinearGradient
          colors={["#05D2FF", "#3787E5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.circuloGradiente}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  circuloContenedor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  circuloGradiente: {
    flex: 1,
  },
});
