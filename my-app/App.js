import AppRoutes from './src/routes';
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <AppRoutes />
    </NativeBaseProvider>
  );
}

