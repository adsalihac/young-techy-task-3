import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(""); // "" is the default value
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = useState("");

  const [showRegistrationSuccess, setShowRegistrationSuccess] =
    React.useState(false); // false is the default value

  const registration = () => {
    if (name == "") {
      alert("Please enter your name");
      return; // stop the function
    }

    if (mobileNumber == "" || mobileNumber.length < 10) {
      alert("Please enter valid mobile number");
      return; // stop the function
    }

    if (userName == "" || userName.length < 5) {
      alert("Please enter valid username (min 5 characters)");
      return; // stop the function
    }

    if (password == "" || password.length < 8) {
      alert("Please enter valid password (min 8 characters)");
      return; // stop the function
    }

    setShowRegistrationSuccess(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F0F2F5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Facebook</Text>
      <TextInput
        onChangeText={(text) => {
          setName(text);
        }}
        cursorColor="red"
        value={name}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#3975EA",
        }}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={(text) => {
          setMobileNumber(text);
        }}
        value={mobileNumber}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#3975EA",
        }}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        maxLength={10}
      />
      <TextInput
        onChangeText={(text) => {
          setUserName(text);
        }}
        value={userName}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#3975EA",
        }}
        placeholder="Enter your username"
      />

      <TextInput
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#3975EA",
        }}
        placeholder="Enter your password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={() => {
          registration();
        }}
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
          Registration
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showRegistrationSuccess}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowRegistrationSuccess(false);
        } // when user press back button
        }
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              height: 200,
              width: "70%",
              backgroundColor: "#fff",
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Registration Success
            </Text>

            <Text>
              name: {name} {"\n"}
              mobileNumber: {mobileNumber} {"\n"}
              userName: {userName} {"\n"}
              password: {password}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#3975EA",
                height: 40,
                width: 140,
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={() => setShowRegistrationSuccess(false)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
