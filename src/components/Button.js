import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ buttonName, buttonOnPress }) => {
  return (
    <TouchableOpacity
      onPress={buttonOnPress}
      style={{
        backgroundColor: "#3975EA",
        height: 40,
        width: 140,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
