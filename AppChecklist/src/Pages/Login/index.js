import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="Digite um email..."
        style={styles.inputText}
        onChangeText={(text) => setEmail(text)}
      />

<Text>Senha</Text>
      <TextInput
        placeholder="Digite um email..."
        style={styles.inputText}
        onChangeText={(text) => setSenha(text)}
      />


    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  inputText: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
});
