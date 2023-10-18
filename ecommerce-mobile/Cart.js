import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Cart = () => {
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
        {/* Add your cart items here */}
      </View>
      <View style={styles.cartContainer}>
        <View style = {styles.cart}>
        <View style={styles.picture}>
        
        </View>
        <View style={styles.text}>
        <View>
        <Text style={styles.Discriptiontext}>Nike Air Max 200</Text>
        </View>
        <View>
        <Text style={styles.Pricetext}>R 200.00</Text>
        </View>
        </View>

        <View style={styles.IncreseDecrease}>

        </View>
       
        <View style={styles.PirceAndText}>

         </View>
         <View style={styles.checkoutPirce}>

         </View>
        </View>
       
        {/* Add your cart items here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arrowIcon: {
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cartText:{
   fontSize:24,
   fontWeight:'bold',  
  },
  trashIcon: {
    backgroundColor: 'white',
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    paddingHorizontal: 10,
  },
  cartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF5E6',
    height: 60,
    // minWidth: 360,
    paddingHorizontal: 20,
    borderTopRightRadius:30,
    borderTopLeftRadius:30

  },
  cart:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 105,
    width:320,
    paddingHorizontal: 12,
    borderRadius:32
  },
  picture:{
  backgroundColor: 'red',
  height: 80,
  minWidth: 80,
  borderRadius: 40
  },
  text:{
    height: 80,
    paddingLeft:20,
  },
  Discriptiontext: {
    paddingTop:15,
    fontSize: 12,
    fontWeight: 'bold', 
    paddingBottom:10,  
  },
  Pricetext:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  IncreseDecrease:{
    
  },
  PirceAndText:{
    height: 80,
    backgroundColor:'red',

  },
  checkoutPirce:{
    height: 80,
    backgroundColor:'red',
  }
});

export default Cart;
