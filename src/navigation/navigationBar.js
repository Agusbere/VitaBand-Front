import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const nav = useNavigation();

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (route.name === "NewMedication") {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("NewMedication")}
              style={styles.plusButton}
            >
              <Ionicons name="add" size={30} color="white" />
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

        if (!iconName) return null;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName}
              size={22}
              color={isFocused ? "#3B82F6" : "#94A3B8"}
            />
            <Text
              style={{
                color: isFocused ? "#3B82F6" : "#94A3B8",
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
  plusButton: {
    backgroundColor: "#3B82F6",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default NavBar;