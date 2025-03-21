import React, { useLayoutEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
// import useGasController from "../controllers/GasController";
// import Encabezado from "../components/Encabezado";
// import Resultado from "../components/Resultado";
// import BHistorial from "../components/BHistorial";
// import ButtonMap from "../components/ButtonMap";
// import Footer from "../components/Footer";

const CostoScreen = ({ navigation }) => {
  const { gasData, limpiarCampos, actualizarCampo } = useGasController();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Encabezado name="Costo Combustible" iconName="attach-money" limpiar={limpiarCampos} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.definicion}>Distancia a viajar</Text>
      <TextInput
        style={styles.input}
        placeholder="En Kilómetros"
        value={gasData.distancia}
        onChangeText={(text) => actualizarCampo("distancia", text)}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Gasto de gasolina por Km</Text>
      <TextInput
        style={styles.input}
        placeholder="0.08"
        value={gasData.gastoPorKlm}
        onChangeText={(text) => actualizarCampo("gastoPorKlm", text)}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Precio de la gasolina</Text>
      <TextInput
        style={styles.input}
        placeholder="$"
        value={gasData.precioGasolina}
        onChangeText={(text) => actualizarCampo("precioGasolina", text)}
        keyboardType="numeric"
      />

      <View>
        <Resultado disAViajar={gasData.distancia} gastoKlm={gasData.gastoPorKlm} precioGas={gasData.precioGasolina} />
        <BHistorial />
        <ButtonMap />
      </View>

      <Footer screenName="Second" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  definicion: {
    fontSize: 17,
    color: "black",
  },
});

export default CostoScreen;






// export default DescuentoScreen;
// import React, { useContext, useLayoutEffect } from 'react';
// import { Text, View, TextInput, StyleSheet } from 'react-native';
// import { GasContext } from '../src/context/gascontext';
// import Resultado from './bcalcular';
// import BHistorial from './bHistorial';
// import Footer from './piePagina';
// import Encabezado from './encabezado';
// import ButtonMap from './maps';


// const CostoScreen = ({ navigation }) => {
//   const { gasData, setGasData } = useContext(GasContext);
//   const limpiarCam = () => {
//     setGasData({
//       distancia: "",
//       gastoPorKlm: "",
//       precioGasolina: "",

//     });
//   };


//   useLayoutEffect(() => {
//     navigation.setOptions({
//       header: () => <Encabezado name="Costo Combustible" iconName="attach-money" limpiar={limpiarCam} />
//     });
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.definicion}>Distancia a viajar</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="En Kilometros"
//         value={gasData.distancia}
//         onChangeText={(text) => setGasData({ ...gasData, distancia: text })}
//         keyboardType="numeric"
//       />

//       <Text style={styles.definicion}>Gasto de gasolina por Klm</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="0.08"
//         value={gasData.gastoPorKlm}
//         onChangeText={(text) => setGasData({ ...gasData, gastoPorKlm: text })}
//         keyboardType="numeric"
//       />

//       <Text style={styles.definicion}>Precio de la gasolina</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="$"
//         value={gasData.precioGasolina}
//         onChangeText={(text) => setGasData({ ...gasData, precioGasolina: text })}
//         keyboardType="numeric"
//       />

//       <View>
//         <Resultado
//           disAViajar={gasData.distancia}
//           gastoKlm={gasData.gastoPorKlm}
//           precioGas={gasData.precioGasolina}
         
//         />
//         <BHistorial />
//         <ButtonMap/>

//       </View>
//       <Footer screenName="Second" />
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'flex',
//     backgroundColor: "#FFFFFF",
//     paddingVertical: 20,
//     padding: 20,

//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 8,
//     paddingHorizontal: 10,
//   },
//   definicion: {
//     fontSize: 17,
//     color: 'black',
//   },

// });

// export default CostoScreen;


