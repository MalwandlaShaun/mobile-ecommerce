import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Cart = () => {
  const cartItems = [
    {
      name: "Nike Air Max 200",
      price: "R 240.00",
      id: "1",
    },
    {
      name: "Adidas Ultra Boost",
      price: "R 320.00",
      id: "2",
    },
    {
      name: "Puma RS-X",
      price: "R 180.00",
      id: "3",
    },
    {
      name: "Reebok Classic",
      price: "R 200.00",
      id: "4",
    },
    {
      name: "New Balance 574",
      price: "R 260.00",
      id: "5",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cart}>
      <View style={styles.picture}></View>
      <View style={styles.text}>
        <View>
          <Text style={styles.Discriptiontext}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.Pricetext}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.IncreseDecrease}>
        <View style={styles.Decrease}>
          <Icon name="minus" size={10} color="black" solid />
        </View>
        <View style={styles.Number}>
          <Text> 1 </Text>
        </View>
        <View style={styles.Increase}>
          <Icon name="plus" size={10} color="black" solid />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.arrowIcon}>
          <Icon name="arrow-left" size={20} color="black" solid />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cartText}>My Cart</Text>
        </View>
        <View style={styles.trashIcon}>
          <Icon name="trash" size={20} color="grey" solid />
        </View>
      </View>
      <View style={styles.cartContainer}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.bottomCart}>
          <View style={styles.TotalPirceAndTaxes}>
            <View style={styles.subtotal}>
              <Text style={styles.PirceAndTaxestColor}>Subtotal:</Text>
              <Text style={styles.Pricetext}> R 1250</Text>
            </View>
            <View style={styles.taxes}>
              <Text style={styles.PirceAndTaxestColor}>Taxes:</Text>
              <Text style={styles.Pricetext}> R 40</Text>
            </View>
          </View>
          <View style={styles.PirceAndCheckout}>
            <View style={styles.TolatPrice}>
              <Text style={styles.TotatPriceText}> R 1250</Text>
            </View>
            <View style={styles.checkOut}>
              <Icon name="cart-plus" size={15} color="#90ffff" solid />
              <Text style={styles.checkOuttext}>Check Out</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  arrowIcon: {
    backgroundColor: "white",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  cartText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  trashIcon: {
    backgroundColor: "white",
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
    paddingHorizontal: 10,
  },
  cartContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FDF5E6",
    height: 60,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },

  cart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 105,
    width: 320,
    paddingHorizontal: 12,
    borderRadius: 30,
    marginBottom: 10, // Add margin bottom to create a gap between the cart components
    justifyContent: "space-between",
  },
  picture: {
    backgroundColor: "red",
    height: 80,
    minWidth: 80,
    borderRadius: 40,
  },
  text: {
    flex:1,
    height: 80,
    paddingLeft: 20,
    marginRight: 20, 
   
  },

  Discriptiontext: {
    paddingTop: 15,
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  Pricetext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  IncreseDecrease: {
    flexDirection:'column',
    alignItems: "center",
    backgroundColor: "white",
    width:30,
    height:80,
    justifyContent: "space-between",
  },
  TotalPirceAndTaxes: {
    height: 50,
    width: "100%",
    backgroundColor: "#FDF5E6",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 70,
    alignItems: "center",
  },
  bottomCart: {
    backgroundColor: "#FDF5E6",
    width: "100%",
  },
  PirceAndCheckout: {
    height: 105,
    backgroundColor: "white",
    flexDirection: "row",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  Decrease: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    fontWeight: "bold",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },

  Increase: {
    backgroundColor: "#90ffff",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    fontWeight: "bold",
  },
  subtotal: {
    flexDirection: "row",
  },
  taxes: {
    flexDirection: "row",
  },
  checkOut: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#123499",
    width: 120,
    paddingHorizontal: 15,
  },
  TotatPriceText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  checkOuttext: {
    fontSize: 13,
    color: "white",
  },
  PirceAndTaxestColor: {
    fontSize: 15,
    color: "grey",
    fontWeight: "bold",
  },
});

export default Cart;
