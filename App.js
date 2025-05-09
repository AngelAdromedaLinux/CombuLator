import * as React from 'react';
import RootNavigator from './src/navigation/RootNavigator';  // Importamos RootNavigator

export default function App() {
  return (
    <RootNavigator />  // Usamos RootNavigator en lugar de definir la navegación aquí
  );
}
