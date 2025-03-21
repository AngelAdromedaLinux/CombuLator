import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../components/firebase";
import HistorialModel from "../models/HistorialModel";

const useHistorialController = () => {
  const [calculos, setCalculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchCalculos = async () => {
      try {
        if (user) {
          const q = query(collection(db, "calculos"), where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map(HistorialModel.formatCalculo);
          setCalculos(data);
        }
      } catch (error) {
        console.error("Error al obtener los cálculos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalculos();
  }, [user]);

  const eliminarCalculo = async (id) => {
    try {
      await deleteDoc(doc(db, "calculos", id));
      setCalculos(calculos.filter((calculo) => calculo.id !== id));
    } catch (error) {
      console.error("Error al eliminar el cálculo:", error);
    }
  };

  return {
    calculos,
    loading,
    eliminarCalculo,
  };
};

export default useHistorialController;
