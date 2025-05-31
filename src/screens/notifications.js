import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications screen</Text>
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

export default Notification;
