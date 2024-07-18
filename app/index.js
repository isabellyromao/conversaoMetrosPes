import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [metros, setMetros] = useState('1.00');
  const [pes, setPes] = useState('3.28');

  const metrosParaPes = (metros) => (metros * 3.28084).toFixed(2);
  const pesParaMetros = (pes) => (pes / 3.28084).toFixed(2);

  const conversaoMetros = (value) => {
    setMetros(value);
    setPes(metrosParaPes(value));
  };

  const conversaoPes = (value) => {
    setPes(value);
    setMetros(pesParaMetros(value));
  };

  const aumentarMetros = () => {
    const novoValor = (parseFloat(metros) + 1).toFixed(2);
    conversaoMetros(novoValor);
  };

  const diminuirMetros = () => {
    const novoValor = (parseFloat(metros) - 1).toFixed(2);
    conversaoMetros(novoValor);
  };

  const aumentarPes = () => {
    const novoValor = (parseFloat(pes) + 1).toFixed(2);
    conversaoPes(novoValor);
  };

  const diminuirPes = () => {
    const novoValor = (parseFloat(pes) - 1).toFixed(2);
    conversaoPes(novoValor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Distâncias</Text>
      <View style={styles.containerCamposDeConversao}>
        <View style={styles.campoDeConversao}>
          <Text style={styles.label}>Metros</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={metros}
            onChangeText={conversaoMetros}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={aumentarMetros}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={diminuirMetros}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.igual}>=</Text>
        <View style={styles.campoDeConversao}>
          <Text style={styles.label}>Pés</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={pes}
            onChangeText={conversaoPes}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={aumentarPes}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={diminuirPes}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
    textAlign: 'center',
  },
  containerCamposDeConversao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  campoDeConversao: {
    alignItems: 'center',
    borderColor: 'gray',
    flexDirection: 'column',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    gap: 10
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 100,
    textAlign: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  igual: {
    fontSize: 24,
    marginHorizontal: 16,
  },
});