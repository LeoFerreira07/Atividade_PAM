import React, { useState } from 'react';
import { View,TextInput,StyleSheet,Text,Keyboard,TouchableOpacity} from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [idealWeight, setIdealWeight] = useState({ min: null, max: null });

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
        placeholderTextColor="#95a5a6"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        placeholderTextColor="#95a5a6"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      
      <TouchableOpacity 
        style={styles.calculateButton}
        onPress={calculateIMC}
      >
        <Text style={styles.buttonText}>CALCULAR IMC</Text>
      </TouchableOpacity>

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
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 8,
  },
  input: {
    height: 48,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontSize: 16,
    color: '#2C3E50',
  },
  calculateButton: {
    backgroundColor: '#2C3E50',
    paddingVertical: 14,
    borderRadius: 4,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default FormIMC;