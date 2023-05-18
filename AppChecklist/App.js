import { Link, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Login from './src/Pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Botoes/>*/}
     <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
  },
});
