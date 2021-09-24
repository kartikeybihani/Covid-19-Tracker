import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

export default function Countries() {
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(res => {
      setCountries(res.data.Countries);
      setLoading(false);
    });
  }, []);

  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  return (
    <View style={styles.view}>
      <Header />
      <ScrollView style={styles.scroll}>
        <Text style={styles.heading}>Countries Along with their Codes</Text>
        {loading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#00ff00"
          />
        ) : (
          countries.map((country, key) => {
            return (
              <Text style={styles.country} key={key}>
                {country.Country} {country.CountryCode}
              </Text>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#393E46',
  },
  loading: {
    height: 750,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  country: {
    elevation: 5,
    borderWidth: 2,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    width: 300,
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    backgroundColor: '#F55C47',
  },
  scroll: {
    marginBottom: 40,
  },
});
