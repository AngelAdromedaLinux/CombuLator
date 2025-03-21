

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './navigation.js';
import { GasProvider } from './src/context/gascontext.js';
import { DesProvider } from './src/context/descontext.js';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider>
      <GasProvider>
        <DesProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </DesProvider>
      </GasProvider>
    </NativeBaseProvider>
  );


};

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Sopa de Pollo!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
