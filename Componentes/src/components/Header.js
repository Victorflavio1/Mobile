import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const Header = (titulo, subtitulo) => {
return (
  <>
    <Text style={estilos.titulo}>{props.titulo}</Text> 
    <Text style={estilos.subtitulo}>{props.subtitulo}</Text>
 </> 
)};

const estilos = StyleSheet.create({
    titulo:{
        color:"white",
        fontSize: 30,  
    },
    subtitulo:{
        color: 'blue',
        fontSize: 30,
    }
});

export default Header;