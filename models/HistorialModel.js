const HistorialModel = {
    formatCalculo: (doc) => ({
      id: doc.id,
      ...doc.data(),
    }),
  };
  
  export default HistorialModel;
  