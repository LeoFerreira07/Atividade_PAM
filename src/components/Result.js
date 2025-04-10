import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
  return <Text style={styles.result}>Seu IMC: {imc}</Text>;
};

const styles = StyleSheet.create({
  result: {
    marginTop: 24,
    fontSize: 24,
    textAlign: 'center',
    color: '#2C3E50',
    fontWeight: '300',
  },
});

export default Result;