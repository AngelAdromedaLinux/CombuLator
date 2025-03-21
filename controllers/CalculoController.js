import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../services/firebase"; // Ajusta la ruta a Firebase

export const calcularCosto = (distancia, gastoPorKlm, precioGasolina) => {
  const gasolina = distancia * gastoPorKlm;
  const costo = gasolina * precioGasolina;
  
  return {
    costo: costo.toFixed(2),
    gasolina: gasolina.toFixed(2),
  };
};

export const guardarCalculo = async (distancia, gastoPorKlm, precioGasolina, costo, gasolina) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      console.error("No hay usuario autenticado.");
      return;
    }

    await addDoc(collection(db, "calculos"), {
      uid: user.uid,
      distancia,
      gastoPorKlm,
      precioGasolina,
      costoEstimado: costo,
      cantidadGasolina: gasolina,
      fecha: new Date().toISOString(),
    });

    console.log("Cálculo guardado correctamente en Firestore.");
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
  }
};
