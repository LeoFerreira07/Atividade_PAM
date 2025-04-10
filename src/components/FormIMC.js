import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [idealWeight, setIdealWeight] = useState({ min: null, max: null }); // Inicializado corretamente

  const calculateIMC = () => {
    Keyboard.dismiss();
    
    if (!peso || !altura) {
      alert('Preencha peso e altura');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      alert('Valores inválidos');
      return;
    }

    const alturaMetros = alturaNum / 100;
    const imcCalculado = (pesoNum / (alturaMetros ** 2)).toFixed(1);
    
    setImc(imcCalculado);
    setIdealWeight({
      min: (18.5 * alturaMetros ** 2).toFixed(1),
      max: (24.9 * alturaMetros ** 2).toFixed(1)
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calculateIMC} />

      {imc && (
        <>
          <Result imc={imc} />
          <Classification imc={parseFloat(imc)} />
          {idealWeight.min && idealWeight.max && (
            <IdealWeight min={idealWeight.min} max={idealWeight.max} />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default FormIMC;