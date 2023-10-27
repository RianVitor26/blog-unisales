
import { Text, View, StyleSheet } from 'react-native';

export default function Posts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});