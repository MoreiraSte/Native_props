import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/botao'


export default function App() {

  const logar = ()=>{
    alert('logando...')

  }
  const deslogar = ()=>{
    alert('deslogando...')
    
  }
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Botao type='warn' icone='login' origem='direita' onPress={logar}>Entrar</Botao>
      <Botao type='primary' icone='logout' onPress={deslogar}>Logout</Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
