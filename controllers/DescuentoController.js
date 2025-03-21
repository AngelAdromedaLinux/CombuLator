import { useState, useEffect } from "react";
import DescuentoModel from "../models/DescuentoModel";

const useDescuentoController = () => {
  const [desData, setDesData] = useState(DescuentoModel.createDefaultData());

  const limpiarCampos = () => {
    setDesData(DescuentoModel.createDefaultData());
  };

  const actualizarCampo = (campo, valor) => {
    setDesData({ ...desData, [campo]: valor });
  };

  useEffect(() => {
    const { impuesto, precioOriginal, porcDescuento } = desData;
    const resultado = DescuentoModel.calcularDescuento(impuesto, precioOriginal, porcDescuento);
    setDesData((prev) => ({ ...prev, ...resultado }));
  }, [desData.impuesto, desData.precioOriginal, desData.porcDescuento]);

  return {
    desData,
    limpiarCampos,
    actualizarCampo,
  };
};

export default useDescuentoController;
