import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import React from "react";
import BackgroundImage from "../../../assets/bg.jpg";

const Home = () => {
  return (
    <ImageBackground source={BackgroundImage} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <View style={{ height: "60%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 60,
            paddingHorizontal: 40,
            fontWeight: "500",
            paddingTop: 70,
          }}
        >
          The best app for your plants
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          height: "40%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 300,
            height: 20,
            borderRadius: 20,
            paddingVertical: 25,
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: 50 }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderRadius: 20,
    
          }}
        >
          <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
