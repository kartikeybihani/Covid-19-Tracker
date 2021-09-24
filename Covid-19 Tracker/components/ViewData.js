import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ViewData({data}) {
  const dataTitles = [
    {key: 'TotalDeaths', title: 'Total Deaths'},
    {key: 'TotalRecovered', title: 'Total Recovered'},
    {key: 'NewDeaths', title: 'New Deaths'},
    {key: 'NewRecovered', title: 'New Recoveries'},
  ];

  return (
    <View style={styles.view}>
      {data.Country ? (
        <Text style={styles.heading}>
          Country: {data.Country} ({data.CountryCode})
        </Text>
      ) : (
        <Text style={styles.heading}>WorldWide</Text>
      )}
      <Text style={styles.main}>
        {data.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
        {'\n'} Total Cases
      </Text>
      <FlatList
        data={dataTitles}
        renderItem={({item}) => (
          <View>
            <Text style={styles.content}>
              {data[item.key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              {'\n'} {item.title}
            </Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 25,
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 40,
    textAlign: 'center',
    lineHeight: 40,
  },
  view: {
    height: 550,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    backgroundColor: '#F55C47',
    elevation: 10,
    borderWidth: 2,
    flexDirection: 'column',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    width: 170,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  main: {
    width: 300,
    backgroundColor: '#F55C47',
    elevation: 10,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 22,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
