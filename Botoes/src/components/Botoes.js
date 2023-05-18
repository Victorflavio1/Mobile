import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  TextComponent,
} from 'react-native';
import React from 'react';

const Botoes = () => {
  function botaoPressionado(numero) {
    // console.warn('O botão foi pressionado ' + numero);
    //    console.log('O botão foi pressionado');
    Alert.alert('Titulo do alerta', 'o botão foi pressionado ' + numero);
  }

  return (
    <View>
      <Button title="Sou um botão" onPress={() => botaoPressionado(5)} />
      <TouchableOpacity style={styles.botaoOpacity} activeOpacity={0.7} onPress={() => botaoPressionado(5)}>
        <Text style={styles.textoBotao}>Botão com formatação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Botoes;

const styles = StyleSheet.create({
  botaoOpacity: {
    marginTop: 10,
    backgroundColor: 'blueviolet',
    borderRadius: 5,
    padding: 10,
  },

  textoBotao: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
