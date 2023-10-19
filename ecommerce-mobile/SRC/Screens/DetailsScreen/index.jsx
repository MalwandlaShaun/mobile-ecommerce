import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

function ProductDetails() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            height: 50,
            width: "100%",
            marginTop: 30,
            // backgroundColor: "blue",
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
            // backgroundColor: "blue",
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
            height: "42.5%",
            width: "100%",
            backgroundColor: "lightgrey",
            borderRadius: 30,
          }}
        >
            <View style={{
                padding: 20,
            }}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Nike Air Max 200</Text>
                <Text style={{fontSize: 15, fontWeight: "normal"}}>Built for natural motion, the Nike Flex shoes</Text>
            </View>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row",
                
            }}>
                <View style={{ height: 35, justifyContent: "center"}}>
                <Text>Size:</Text>
                </View>
                <View style={{
                flexDirection: "row",
                
            }}>
                    <Text style={{marginLeft: 8, fontSize: 18, fontWeight: "bold", width: 53, height: 35, backgroundColor: "lightblue", borderRadius: 6, padding: 8}}>US 6</Text>
                    <Text style={{marginLeft: 8, fontSize: 18, fontWeight: "bold", width: 53, height: 35, padding: 8}}>US 7</Text>
                    <Text style={{marginLeft: 8, fontSize: 18, fontWeight: "bold", width: 53, height: 35, padding: 8}}>US 8</Text>
                    <Text style={{marginLeft: 8, fontSize: 18, fontWeight: "bold", width: 53, height: 35, padding: 8}}>US 9</Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row",
            }}>
                <Text>Available Color:</Text>
                <View style={{
                flexDirection: "row",
                
            }}>
                    <TouchableOpacity style={{marginLeft: 20, width: 23, height: 23, backgroundColor: "yellow", borderRadius: 50}}></TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20, width: 23, height: 23, backgroundColor: "red", borderRadius: 50}}></TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20, width: 23, height: 23, backgroundColor: "pink", borderRadius: 50}}></TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20, width: 23, height: 23, backgroundColor: "lightblue", borderRadius: 50}}></TouchableOpacity>
                </View>
            </View>
        </View>
        <View
          style={{
            height: "12.5%",
            width: "100%",
            backgroundColor: "white",
            borderRadius: 30,
            position: "absolute", 
            bottom: 5,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
            
                <Text>R 269.00</Text>
                <TouchableOpacity>
                    <Text>Add To cart</Text>
                </TouchableOpacity>
            
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
