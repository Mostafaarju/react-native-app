import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [text, setText] = useState({
    name: 'Raju Talukder',
    age: 28,
    city: 'Carrara',
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{text.name}</Text>
        <Text>{text.age}</Text>
        <Text>{text.city}</Text>
        <Separator />
        <Button
          onPress={() =>
            setText({
              name: 'HEllo',
              age: 20,
              city: 'Bangladesh',
            })
          }
          title='Learn Mores'
        >
          Click Me
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
