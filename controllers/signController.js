import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
// import { app } from '../services/firebase'; // Importamos Firebase desde la carpeta correcta

const auth = getAuth(app);

export const registerUser = async (email, password, confirmPassword) => {
    if (!email || !password) {
        Alert.alert('Error', 'Por favor ingrese un correo y una contraseña');
        return false;
    }

    if (password !== confirmPassword) {
        Alert.alert('Error', 'Las contraseñas no coinciden');
        return false;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        return true; // Retornamos `true` si todo salió bien
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        Alert.alert('Error', 'Hubo un problema al registrar el usuario');
        return false;
    }
};
