
import { View, StyleSheet } from 'react-native';
import { Form } from '../../components/Form';

export default function Login() {
  return (
    <View style={styles.container}>
        <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white',
  },  
}); 