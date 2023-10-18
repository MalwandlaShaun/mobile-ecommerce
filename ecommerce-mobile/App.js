import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, { width: windowWidth }]}>
      <View style={styles.container}>
        <Cart />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
