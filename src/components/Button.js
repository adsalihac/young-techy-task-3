import { StyleSheet, Text, TouchableOpacity , Platform , ActivityIndicator } from "react-native";
import React from "react";

const Button = ({ buttonName, buttonOnPress , loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={buttonOnPress}
      style={{
        backgroundColor: Platform.OS === 'android' ?  "#3975EA": "red",
        height: 40,
        width: 140,
        marginTop: Platform.OS === 'android' ?  10 : 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >

    {
      loading ? 
      <ActivityIndicator size="small" color="#fff" />
      :
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {buttonName}
      </Text>
    }

    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
