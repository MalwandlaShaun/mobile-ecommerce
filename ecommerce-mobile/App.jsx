import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./SRC/Screens/LandingScreen/Index";
import DetailsScrean from "./SRC/Screens/DetailsScreen/index";

export default function App() {
  return (
    <>
      <LandingScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
});
