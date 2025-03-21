import { useContext } from "react";
// import { GasContext } from "../contexts/GasContext";
import GasModel from "../models/GasModel";

const useGasController = () => {
  const { gasData, setGasData } = useContext(GasContext);

  const limpiarCampos = () => {
    setGasData(GasModel.createDefaultData());
  };

  const actualizarCampo = (campo, valor) => {
    setGasData({ ...gasData, [campo]: valor });
  };

  return {
    gasData,
    limpiarCampos,
    actualizarCampo,
  };
};

export default useGasController;
