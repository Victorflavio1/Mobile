import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Lista from './src/Components/lista';
import Filmes from './src/Components/Filmes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Filmes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

<StatusBar barStyle="light-content" backgroundColor="#111827" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
});
