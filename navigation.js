import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CostoScreen from "./views/CostoScreen";
import DescuentoScreen from "./views/DescuentoScreen";

import HistorialScreen from "./views/HistorialScreen";
import GasolinerasScreen from "./views/GasolinerasScreen";
import Login from "./views/LoginScreen";
import SignUp from "./views/SingUpScreen";


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Costo Combustible">
      <Stack.Screen
        name="Home"
        component={Login}
        options={{ header: () => <Encabezado name="Iniciar Sesión" iconName="account-circle"  /> }}
      />

      <Stack.Screen
        name="Second"
        component={DescuentoScreen}
        options={{ header: () => <Encabezado name="Descuento" iconName="discount"/> }}
      />
      <Stack.Screen
        name="Three"
        component={HistorialScreen}
        options={{ header: () => <Encabezado name="Historial de Costos" iconName="access-time" /> }}
      />
       <Stack.Screen
        name="Four"
        component={GasolinerasScreen}
        options={{ header: () => <Encabezado name="Gasolineras Cercanas" iconName="local-gas-station" /> }}
      />
      <Stack.Screen
        name="Five"
        component={CostoScreen}
        options={{ header: () => <Encabezado name="Costo del combustible" iconName="attach-money" /> }}
      />
      <Stack.Screen
        name="Six"
        component={SignUp}
        options={{ header: () => <Encabezado name="Registro de usuario" iconName="account-circle" /> }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;