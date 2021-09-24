import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ViewData({data}) {
  return (
    <View style={styles.view}>
      {data.Country ? (
        <Text style={styles.heading}>
          Covid-19 Data {'\n'}
          {data.Country} ({data.CountryCode})
        </Text>
      ) : (
        <Text style={styles.heading}>Covid-19 Data {'\n'}Global</Text>
      )}
      <Text style={styles.content}>
        {data.TotalConfirmed} {'\n'} Total Cases
      </Text>
      <Text style={styles.content}>
        {data.TotalDeaths} {'\n'} Total Deaths
      </Text>
      <Text style={styles.content}>
        {data.TotalRecovered} {'\n'} Total Recovered
      </Text>
      <Text style={styles.content}>
        {data.NewDeaths} {'\n'} Recent Deaths
      </Text>
      <Text style={styles.content}>
        {data.NewRecovered} {'\n'} Recent Recoveries
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    justifyContent: 'center',
    marginBottom: 50,
    textAlign: 'center',
  },
  view: {
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#F55C47',
    elevation: 5,
    marginBottom: 20,
    borderWidth: 2,
    paddingTop: 2,
    paddingBottom: 2,
    width: 200,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 18,
  },
});
