import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerBg}>
      <Text style={styles.header}>Covid-19 Data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    height: 40,
  },
  header: {
    fontSize: 23,
    paddingLeft: 5,
    paddingTop: 5,
    color: '#fff',
  },
});
