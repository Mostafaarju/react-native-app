import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const Button = ({ title }) => {
  return (
    <Pressable
      style={{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#61dafb',
        marginTop: 10,
      }}
      onPress={() => {
        alert('Press');
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  );
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#61dafb' />
      <ScrollView>
        <View style={{ height: 60, backgroundColor: 'cyan' }}>
          <Text>This is a Text</Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'turquoise' }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
              padding: 10,
            }}
          >
            This is a Text
          </Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'aqua' }}>
          <Text>This is a Text</Text>
        </View>
        <View style={{ marginTop: 50, marginLeft: 50 }}>
          <Image
            style={{ height: 200, width: 200 }}
            source={require('./assets/favicon.png')}
            // resizeMethod='cover'
          />
        </View>

        <Button title='Press' />
        <Button title='Press 2 Button' />

        <View style={{ marginTop: 50, marginLeft: 50 }}>
          <Image
            style={{ height: 200, width: 200 }}
            source={{ uri: 'https://picsum.photos/200' }}
            resizeMode={'contain'}
          />
        </View>

        <View style={{ marginTop: 50, marginLeft: 50 }}>
          <Image
            style={{ height: 200, width: 200 }}
            source={{ uri: 'https://picsum.photos/200' }}
            resizeMode={'contain'}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ padding: 10 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            iure. Vero, autem ea! Accusamus blanditiis quas totam officiis unde
            eius aliquid perspiciatis repellendus sequi ab cumque distinctio
            debitis doloremque ut id enim atque, similique possimus. Tenetur
            optio qui mollitia explicabo neque minima debitis modi, repellendus
            dolorem minus magnam vel quae a nihil? Nulla esse blanditiis
            architecto magnam, consectetur dolorum eum nobis nostrum corrupti
            unde praesentium tempore accusantium! Consectetur eaque eligendi
            tempore eos praesentium cum eum, similique iure nemo molestiae!
            Sequi sapiente perferendis voluptatem consequatur, ducimus itaque
            rem facere natus debitis, libero earum praesentium voluptatibus
            voluptates unde repellendus enim molestias sunt!
          </Text>
        </View>
      </ScrollView>
    </>
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
