import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Icones = () => {
  return (
    <View>
      <TouchableOpacity style={styles.botaoAdicionarPessoa}>
        <AntDesign name="adduser" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoRemover}>
        <MaterialIcons name="remove-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Icones;

const styles = StyleSheet.create({
  botaoAdicionarPessoa: {
    backgroundColor: '#1F2937',
    padding: 20,
    width: 70,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },

  botaoRemover: {
    backgroundColor: '#7f1d1d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '20',
    paddingHorizontal: 15,
    width: 150,
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  textoRemover: {
    color: '#ef4444',
    fontSize: 20,
  },
});
