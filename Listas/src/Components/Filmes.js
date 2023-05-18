import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { filmes } from '../data/filmes';

const Filmes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Filmes</Text>

      {/*EXIBINDO OS FILMES*/}
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Alert.alert(item.nome)}>
            <Image source={{ uri: item.imgUrl }} style={styles.imagem} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View styles={styles.separador} />}
      />
    </View>
  );
};

export default Filmes;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
  titulo: {
    fontSize: 35,
    color: '#D1D5D8',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imagem: {
    height: 256,
    width: 172,
    borderRadius: 10,
  },
  separador: {
    width: 15,
  },
});
