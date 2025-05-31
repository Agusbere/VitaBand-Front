import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const NavBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (route.name === "NewMedication") {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("NewMedication")}
              style={styles.plusButtonWrapper}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#007FFF", "#0066CD"]}
                style={styles.plusButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name="add" size={30} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          );
        }

        const isFocused = state.index === index;
        const iconName = {
          Home: "home",
          Banders: "heart",
          Calendar: "calendar",
          Profile: "person",
        }[route.name];

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName}
              size={22}
              color={isFocused ? "#007FFF" : "#94A3B8"}
            />
            <Text
              style={{
                color: isFocused ? "#007FFF" : "#94A3B8",
                fontFamily: "PlusJakartaSans-SemiBold",
                fontSize: 12,
              }}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    elevation: 10,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  plusButtonWrapper: {
    marginBottom: 30,
    borderRadius: 30,
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavBar;