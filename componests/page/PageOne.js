import React from 'react';
import { StyleSheet, View } from 'react-native';
import ComponentOne from '../ComponentOne';
import ComponentThree from '../ComponentsThree';
import ComponentTwo from '../ComponentsTwo';

export default function PageOne() {
  return (
    <View>
      <ComponentOne></ComponentOne>
      <ComponentTwo></ComponentTwo>
      <ComponentThree></ComponentThree>
    </View>
  );
}

const styles = StyleSheet.create({});
