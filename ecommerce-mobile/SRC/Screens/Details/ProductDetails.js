import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";

const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 30,
          height: 50,
          width: "100%",
          backgroundColor: "blue",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
