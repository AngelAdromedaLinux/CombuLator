import React, { useLayoutEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
// import useDescuentoController from "../controllers/DescuentoController";
// import Encabezado from "../components/encabezado";
// import Footer from "../components/Footer";

const DescuentoScreen = ({ navigation }) => {
  const { desData, limpiarCampos, actualizarCampo } = useDescuentoController();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Encabezado name="Descuento" iconName="discount" limpiar={limpiarCampos} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.definicion}>Impuestos +</Text>
      <TextInput
        style={styles.input}
        placeholder="%"
        value={desData.impuesto}
        onChangeText={(text) => actualizarCampo("impuesto", text)}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Precio Original</Text>
      <TextInput
        style={styles.input}
        placeholder="$"
        value={desData.precioOriginal}
        onChangeText={(text) => actualizarCampo("precioOriginal", text)}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>% de Descuento</Text>
      <TextInput
        style={styles.input}
        placeholder="%"
        value={desData.porcDescuento}
        onChangeText={(text) => actualizarCampo("porcDescuento", text)}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Cantidad ahorrada</Text>
      <TextInput
        style={styles.input}
        placeholder="-$"
        value={desData.cantAhorrada}
        editable={false}
      />

      <Text style={styles.definicion}>Precio Final</Text>
      <TextInput
        style={styles.input}
        placeholder="$$$"
        value={desData.precioFinal}
        editable={false}
      />

      <Footer screenName="Three" />
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

export default DescuentoScreen;






// export default DescuentoScreen;
// import React, {  useState, useEffect, useLayoutEffect } from 'react';
// import { Text, View, TextInput, StyleSheet } from 'react-native';
// import Footer from './piePagina';
// import Encabezado from './encabezado';

// const DescuentoScreen = ({navigation}) => {
//   const [desData, setDesData] = useState({
//     impuesto: "",
//     precioOriginal: "",
//     porcDescuento: "",
//     cantAhorrada: "",
//     precioFinal: ""
//   });

//   const limpiarCampos = () => {
//     setDesData({
//       impuesto: "",
//       precioOriginal: "",
//       porcDescuento: "",
//       cantAhorrada: "",
//       precioFinal: ""
//     });
//   };
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       header: () => <Encabezado name="Descuento" iconName="discount" limpiar={limpiarCampos} />
//     });
//   }, [navigation]);

//   const calcularDescuento = () => {
//     const impuesto = parseFloat(desData.impuesto) || 0;
//     const precio = parseFloat(desData.precioOriginal) || 0;
//     const porDes = parseFloat(desData.porcDescuento) || 0;

//     if (precio && porDes) {
//       const cantidadAhorrada = precio * (porDes / 100);
//       const precioConDescuento = precio - cantidadAhorrada;
//       const precioFinal = precioConDescuento + (precioConDescuento * (impuesto / 100));

//       setDesData({
//         ...desData,
//         cantAhorrada: cantidadAhorrada.toFixed(2),
//         precioFinal: precioFinal.toFixed(2)
//       });
//     }
//   };

//   useEffect(() => {
//     if (desData.precioOriginal && desData.porcDescuento) {
//       calcularDescuento();
//     }
//   }, [desData.impuesto, desData.precioOriginal, desData.porcDescuento]);
  
  

//   return (
//     <View style={styles.container}>

//       <Text style={styles.definicion}>Impuestos +</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="%"
//         value={desData.impuesto}
//         onChangeText={(text) => setDesData({ ...desData, impuesto: text })}
//         keyboardType="numeric"
//       />

//       <Text style={styles.definicion}>Precio Original</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="$"
//         value={desData.precioOriginal}
//         onChangeText={(text) => setDesData({ ...desData, precioOriginal: text })}
//         keyboardType="numeric"
//       />

      

//       <Text style={styles.definicion}>% de Descuento</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="% "
//         value={desData.porcDescuento}
//         onChangeText={(text) => setDesData({ ...desData, porcDescuento: text })}
//         keyboardType="numeric"
//       />

//       <Text style={styles.definicion}>Cantidad ahorrada</Text>
//       <TextInput
//         style={styles.input}
//          placeholder="-$"
//          value={desData.cantAhorrada}
//         onChangeText={(text) => setDesData({ ...desData, cantAhorrada: text })}
//         editable={false}
//       />

//       <Text style={styles.definicion}>Precio Final</Text>
//       <TextInput
//        style={styles.input}
//         placeholder="$$$"
//         value={desData.precioFinal}
//         onChangeText={(text) => setDesData({ ...desData, precioFinal: text })}
//         editable={false}
//       />

//       <View>
//         <Footer screenName="Three" />
//       </View>

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

// export default DescuentoScreen;


