import { StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({placeHolder , value , onChange , keyboard , textLength , secureTextEntry}) => {
  return (
      <TextInput
        onChangeText={onChange}
        cursorColor="red"
        value={value}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "red",
        }}
        placeholder={placeHolder}
        keyboardType={keyboard}
        maxLength={textLength}
        secureTextEntry={secureTextEntry}
      />
  );
};

export default InputBox;

const styles = StyleSheet.create({});
