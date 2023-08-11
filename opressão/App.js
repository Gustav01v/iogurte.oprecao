import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro</Text>
      <TextInput style={styles.cadastro} placeholder='Seu E-mail'/>
      <TextInput style={styles.cadastro} placeholder='Seu Nome'/>
      <TextInput style={styles.cadastro} placeholder='Seu Numero'/>
      <TextInput style={styles.cadastro} placeholder='Sua Turma'/>
      
      <Text>
        <TouchableOpacity style={styles.botao1}>
          <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.g}>69</Text>
        <TouchableOpacity style={styles.botao2}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cadastro: {
    borderColor: '#ffff00',
    borderBottomColor: '#000',
    borderRadius: 10,
    alignItems: 'center'
  },

  botao1: {
    borderColor: '#fff',
    backgroundColor: 'black',
    borderRadius: 15
  },

  botao2: {
    borderColor: '#fff',
    backgroundColor: 'black',
    borderRadius: 15
  },

  text: {
    color: '#fff',
  
  },

  texto: {
    color: '#ff7712',
    fontSize: '30px',
    fontWeight: 'bold'
  },

  g: {
    color: '#555'
  }
});
