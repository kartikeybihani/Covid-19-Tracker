import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import ViewData from '../components/ViewData';
import Header from '../components/Header';

function Home({navigation}) {
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(res => {
      setData(res.data.Global);
      setLoading(false);
    });
  }, []);

  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    if (input === '') {
      Alert.alert('Provide a country name/code or enter worldwide');
    } else {
      setLoading(true);
      axios
        .get('https://api.covid19api.com/summary')
        .then(res => {
          if (input.toLowerCase() === 'worldwide') {
            setData(res.data.Global);
          }
          res.data.Countries.map(covidData => {
            covidData.Country.toLowerCase() === input.toLowerCase()
              ? setData(covidData)
              : covidData.CountryCode === input.toUpperCase()
              ? setData(covidData)
              : null;
          });
          setLoading(false);
          setInput('');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Header />
      <TextInput
        style={styles.txt}
        onChange={text => setInput(text.nativeEvent.text)}
        placeholder="Enter Country Name or Country Code"
        placeholderTextColor="grey"
        defaultValue={input}
      />
      <TouchableOpacity style={styles.btnBack} onPress={handleSubmit}>
        <Text style={styles.btn}>Search</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#00ff00"
        />
      ) : (
        <ViewData data={data} />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Countries')}
        style={styles.navBtn}>
        <Text style={styles.navTxt}>Country Names & Codes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#393E46',
    height: 1000,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  btnBack: {
    backgroundColor: '#4C4C6D',
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    elevation: 5,
  },
  btn: {
    fontSize: 20,
    color: '#fff',
    padding: 5,
    textAlign: 'center',
  },
  loading: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    backgroundColor: '#4C4C6D',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
  },
  navTxt: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
