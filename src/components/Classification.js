import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Classification = ({ imc }) => {
  // Função para determinar a classificação com base no IMC
  const getClassification = (imcValue) => {
    if (imcValue < 18.5) return 'Abaixo do peso';
    else if (imcValue < 25) return 'Peso normal';
    else if (imcValue < 30) return 'Sobrepeso';
    else if (imcValue < 35) return 'Obesidade grau 1';
    else if (imcValue < 40) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
  };

  return (
    <Text style={styles.classification}>
      Classificação: {getClassification(imc)}
    </Text>
  );
};

const styles = StyleSheet.create({
  classification: {
    marginTop: 8,
    fontSize: 18,
    textAlign: 'center',
    color: '#16A085', 
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

export default Classification;