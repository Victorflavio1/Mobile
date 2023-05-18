import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Imagens = () => {
  return (
    <View>
      <TouchableOpacity><Image
        style={styles.imagem}
      //  source={require('../../assets/Nitro.jpg')}
      source={{uri: 'https://plus.unsplash.com/premium_photo-1681710503974-e1eb619564a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'}}
        resizeMode="repeat"
      /></TouchableOpacity>
      
    </View>
  );
};

export default Imagens;

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200,
    borderWidth: 2, 
    borderColor: 'blue',
  },
});
