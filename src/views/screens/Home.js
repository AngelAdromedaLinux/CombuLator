import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importa useNavigation

export default function HomeScreen() {
  const navigation = useNavigation();  // Usamos useNavigation aquí

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Autos')}  // Aquí cambiamos router.push por navigation.navigate
        >
          <Text style={styles.buttonText}>Automoviles</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Historial')}  // Igual aquí
        >
          <Text style={styles.buttonText}>Historial de Viajes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Gasolineras')}  // Y aquí también
        >
          <Text style={styles.buttonText}>Gasolineras</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Mapa')}  // Aquí también
        >
          <Text style={styles.buttonText}>Mapas</Text>
        </TouchableOpacity>
      </View>
      
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop' }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
