import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import React from "react";

const LandingScreen = () => {
  const optionsArray = [
    { id: 1, opt: "Sneakers" },
    { id: 2, opt: "Watch" },
    { id: 3, opt: "Backpack" },
  ];

  const heroArray = [
    {
      id: 1,
      img: "",
      title: "Nike Air Max 200",
      Price: 240,
    },
    {
      id: 2,
      img: "",
      title: "Excee Sneakers",
      Price: 260,
    },
    {
      id: 3,
      img: "",
      title: "Air Max Motion 2",
      Price: 290,
    },
    {
      id: 4,
      img: "",
      title: "Leather Sneakers",
      Price: 270,
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            marginTop: 30,
            height: 50,
            width: "100%",
            // backgroundColor: "lime",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "gray",
            }}
          ></View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "gray",
            }}
          ></View>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "gray",
            }}
          ></View>
        </View>
        <View
          style={{
            marginTop: 30,
            height: 50,
            width: "100%",
            // backgroundColor: "lime",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 50,
              width: 150,
              backgroundColor: "gray",
            }}
          >
            <Text
              style={{
                fontSize: 28,

                marginVertical: 6,
                textAlign: "center",
              }}
            >
              Our Product
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 80,
              backgroundColor: "gray",
            }}
          ></View>
        </View>
        <View
          style={{
            marginTop: 30,
            height: 50,
            width: "100%",
            // backgroundColor: "lime",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {optionsArray.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    height: 50,
                    width: 120,
                    flexDirection: "row",
                    borderRadius: 16,
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingLeft: 8,
                    marginRight: 8,
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      marginRight: 8,
                      backgroundColor: "gray",
                    }}
                  ></View>
                  <Text>{item.opt}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 30,
            height: "65%",
            width: "100%",
            //backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FlatList
            data={heroArray}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            renderItem={(item) => {
              return (
                <View
                  style={{
                    height: 250,
                    width: 150,
                    borderRadius: 32,
                    backgroundColor: "white",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <View
                    // source={{ uri: item.image }}
                    style={{
                      marginTop: 30,
                      height: 150,
                      width: 120,
                      backgroundColor: "gray",
                    }}
                  ></View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.item.title}
                    </Text>
                    <Text>{item.item.Price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
});

export default LandingScreen;
