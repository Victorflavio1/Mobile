import { StyleSheet, Text, View } from 'react-native';
import Botoes from './src/components/Botoes';
import Eleitor from './src/components/Eleitor';
import Imagens from './src/components/Imagens';
import Icones from './src/components/Icones';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Botoes/>*/}
      {/*    <Eleitor nome="Victor" idade={27} />
  <Eleitor nome="Victoria" idade={15} />*/}

   {/*   <Imagens />*/} 

   <Icones/> 
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
