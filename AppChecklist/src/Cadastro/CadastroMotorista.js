import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const CadastroMotorista = () => {
  return <View style={styles.container}></View>;
};

export default CadastroMotorista;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38A69D',
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
    padding: 10,
  },
  form: {
    flex: 6,
    backgroundColor: '#FFF',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  titulo: {
    fontSize: 20,
    marginTop: 28,
  },
});
