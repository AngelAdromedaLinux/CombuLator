import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HistorialItem = ({ item, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Distancia: {item.distancia} km</Text>
      <Text style={styles.itemText}>Costo: {item.costoEstimado}</Text>
      <Text style={styles.itemText}>Gasolina: {item.cantidadGasolina}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HistorialItem;
