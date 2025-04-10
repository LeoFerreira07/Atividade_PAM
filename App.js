import { StyleSheet, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default function App() {
  return (
    <DismissKeyboard>
      <ScrollView 
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Title />
        <FormIMC />
      </ScrollView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});