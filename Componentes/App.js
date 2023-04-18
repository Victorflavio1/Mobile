import { View ,Text, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Box from './src/components/Box';

export default function App() {
const titulo="Titulo numa variável!"

  return (
    <View style={estilos.container}> 
      <Box>
        <Text> Esse é um texto</Text>
        <Text> Esse é outro texto</Text>
      </Box>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
  },    
});