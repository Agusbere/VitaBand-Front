import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>calendar screen</Text>
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

export default Calendar;