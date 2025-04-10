import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IdealWeight = ({ min, max }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faixa de Peso Ideal</Text>
      <View style={styles.weightRange}>
        <Text style={styles.weightText}>{min} kg</Text>
        <Text style={styles.separator}>a</Text>
        <Text style={styles.weightText}>{max} kg</Text> 
      </View>
      <Text style={styles.note}>(IMC entre 18.5 e 24.9)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  weightRange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  weightText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1b5e20',
  },
  separator: {
    marginHorizontal: 10,
    color: '#4caf50',
  },
  note: {
    fontSize: 12,
    color: '#689f38',
    fontStyle: 'italic',
  },
});

export default IdealWeight;