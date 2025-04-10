import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return <Text style={styles.title}>Calculadora de IMC</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 32,
    color: '#2C3E50',
    letterSpacing: 1,
  },
});

export default Title;