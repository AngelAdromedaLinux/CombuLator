const DescuentoModel = {
    createDefaultData: () => ({
      impuesto: "",
      precioOriginal: "",
      porcDescuento: "",
      cantAhorrada: "",
      precioFinal: "",
    }),
  
    calcularDescuento: (impuesto, precio, porDes) => {
      const impuestoNum = parseFloat(impuesto) || 0;
      const precioNum = parseFloat(precio) || 0;
      const porDesNum = parseFloat(porDes) || 0;
  
      if (!precioNum || !porDesNum) return { cantAhorrada: "", precioFinal: "" };
  
      const cantidadAhorrada = precioNum * (porDesNum / 100);
      const precioConDescuento = precioNum - cantidadAhorrada;
      const precioFinal = precioConDescuento + (precioConDescuento * (impuestoNum / 100));
  
      return {
        cantAhorrada: cantidadAhorrada.toFixed(2),
        precioFinal: precioFinal.toFixed(2),
      };
    },
  };
  
  export default DescuentoModel;
  