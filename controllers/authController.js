import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
// import { app } from '../services/firebase'; // Importamos Firebase desde la carpeta correcta

const auth = getAuth(app); // Obtener la instancia de autenticación

export const loginRequest = async (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Por favor ingrese un correo y una contraseña');
        return false;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Inicio de sesión', 'Accediendo...');
        return true; // Retornamos `true` si todo salió bien
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
        return false; // Retornamos `false` si hubo un error
    }
};

