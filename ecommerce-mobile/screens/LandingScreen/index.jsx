import { View, Text, SafeAreaView } from "react-native";
//import { SafeAreaView } from "expo-status-bar";
//import Styles from "./styles";
import styles from "./styles";

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.titleText}></View>
      <View style={styles.scrollOptions}></View>
      <View style={styles.hero}></View>
    </SafeAreaView>
  );
};

export default LandingScreen;
