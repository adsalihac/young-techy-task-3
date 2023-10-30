import { StyleSheet, Text, View, Modal, Platform ,Alert  } from "react-native";
import React, { useState } from "react";
import InputBox from "./src/components/InputBox";
import Button from "./src/components/Button";

const App = () => {
  const [name, setName] = useState(""); // "" is the default value
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = React.useState(false);

  const [showRegistrationSuccess, setShowRegistrationSuccess] =
    React.useState(false); // false is the default value

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

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

    if (!validateEmail(email)) {
      alert("Please enter valid email");
      return; // stop the function
    }

    if (password == "" || password.length < 8) {
      alert("Please enter valid password (min 8 characters)");
      return; // stop the function
    }

    setLoading(true);

    setTimeout(() => {
      setShowRegistrationSuccess(true);
      setLoading(false);
    }, 3000);
  };

  const closeModal = () => {
    setShowRegistrationSuccess(false);
    Alert.alert('Exist', 'You can exist login', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

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

      <InputBox
        placeHolder={"Enter your name"}
        value={name}
        onChange={(text) => {
          setName(text);
        }}
      />
      <InputBox
        placeHolder={"Enter your phone number"}
        value={mobileNumber}
        onChange={(text) => {
          setMobileNumber(text);
        }}
        keyboard="phone-pad"
        textLength={10}
      />
      <InputBox
        placeHolder={"Enter your username"}
        value={userName}
        onChange={(text) => {
          setUserName(text);
        }}
      />

      <InputBox
        placeHolder={"Enter your email"}
        value={email}
        onChange={(text) => {
          setEmail(text);
        }}
        keyboard={"email-address"}
      />

      <InputBox
        placeHolder={"Enter your password"}
        value={password}
        onChange={(text) => {
          setPassword(text);
        }}
        secureTextEntry={true}
      />

      <Button
        buttonName="Registration"
        buttonOnPress={() => {
          registration();
        }}
        loading={loading}
      />

      <Modal
        visible={showRegistrationSuccess}
        animationType="slide"
        transparent={true}
        onRequestClose={
          () => {
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
              justifyContent: "center",
              alignItems: "center",
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

            <Text>
              {Platform.OS} : {Platform.Version} {"\n"}
            </Text>

            <Button
              buttonName="Close"
              buttonOnPress={() => closeModal()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
