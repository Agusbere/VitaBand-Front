import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Banders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>banders screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 20,
  },
});

export default Banders;