import { View, Text, StyleSheet, SafeAreaView } from "react-native";

function ProductDetails() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            height: 50,
            width: "100%",
            marginTop: 30,
            backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ height: 50, width: 50, backgroundColor: "gray" }}
          ></View>
          <View
            style={{ height: 50, width: 50, backgroundColor: "gray" }}
          ></View>
          <View
            style={{ height: 50, width: 50, backgroundColor: "gray" }}
          ></View>
        </View>
        <View
          style={{
            height: "45%",
            width: "100%",
            marginTop: 10,
            backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              height: 250,
              width: 250,
              marginTop: 45,
              backgroundColor: "gray",
              justifyContent: "center",
              borderRadius: 150,
            }}
          ></View>
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            marginTop: 2,
            backgroundColor: "lime",
          }}
        >
            <View style={{
                padding: 20,
            }}>
                <Text>Nike Air Max 200</Text>
                <Text>Built for natural motion, the Nike Flex shoes</Text>
            </View>
            <View>
                <Text>Size:</Text>
            </View>
            <View>
                <Text>Available Color:</Text>
            </View>
        </View>
        <View
          style={{
            height: "12.5%",
            width: "100%",
            marginTop: 2,
            backgroundColor: "blue",
          }}
        >
            <View>
                <Text></Text>
            </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
});

export default ProductDetails;
