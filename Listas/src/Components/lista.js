import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { contatos } from '../data/contatos';
import Contato from './Contato';
import { StatusBar } from 'expo-status-bar';

const Lista = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Meus Contatos</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        //horizontal={true}
      >
        {/* Exibindo contatos */}
        {contatos.map((item) => (
          <Contato key={item.id} contato={item} />
        ))}
      </ScrollView>

     
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  conteiner: {
    padding: 5,
    flex: 1,
  },
  titulo: {
    fontSize: 35,
    color: '#D1D5D8',
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
