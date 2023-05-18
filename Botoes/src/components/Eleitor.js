import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Eleitor = ({ nome, idade }) => {
  const apto = idade >= 16;

  return (
    <View
      style={[
        styles.container,
        idade >= 16 ? styles.containerApto : styles.containerInapto,
      ]}
    >
      <Text style={styles.textoELeitor}>
        Eleitor(a): {nome} - idade: {idade} anos
      </Text>

      {apto ? (
        <Text style={styles.textoApto}>Apto a votar</Text>
      ) : (
        <Text style={styles.textoInapto}>Inapto a votar</Text>
      )}
    </View>
  );
};

export default Eleitor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 7,
    padding: 1,
    marginVertical: 5,
  },

  textoELeitor: {
    fontSize: 30,
    color: 'white',
  },

  textoApto: {
    fontSize: 20,
    color: '#10B930',
  },

  textoInapto: {
    fontSize: 20,
    color: '#EF4444',
  },

  containerApto: {
    backgroundColor: '#064e3b',
  },

  containerInapto: {
    backgroundColor: '#7F1D1D',
  },
});
