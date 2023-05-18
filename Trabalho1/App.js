import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>CADASTRO DE USUÁRIO</Text>

      <Text>Nome</Text>
      <TextInput placeholder="Digite seu nome" style={estilos.input} />

      <Text>CPF</Text>
      <TextInput placeholder="Digite seu CPF" style={estilos.input} />

      <Text>Telefone</Text>
      <TextInput placeholder="Digite seu telefone" style={estilos.input} />

      <Text>Endereço</Text>
      <TextInput placeholder="Digite seu endereço" style={estilos.input} />

      <TouchableOpacity style={estilos.botaoCancelar}>
        <Text style={estilos.textoBotao}>CANCELAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoSalvar}>
        <Text style={estilos.textoBotao}>SALVAR</Text>
      </TouchableOpacity>
      
    </View>
  );
}

//Text, View, TextInput e TouchableOpacity.

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#000080',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: '#B0E0E6',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  input: {
    backgroundColor: '#E5E7EB',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  botaoSalvar: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 15,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botaoCancelar: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 15,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
