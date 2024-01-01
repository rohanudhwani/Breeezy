import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appbar, Button, Card, TextInput } from 'react-native-paper';
import Header from './Header';

const Search = () => {

    const [city, setCity] = React.useState("")
    const [cities, setCities] = React.useState([])

    const fecthCities = (text) => {
        console.log(text)
        setCity(text)
        fetch("https://api.weatherapi.com/v1/search.json?key=a51244fd132645debd9180857240101&q="+text).then(item => item.json()).then(cityData => {
            setCities(cityData.slice(0,9))
        })
    }

  return (
    <View>
        <Header name="Search Screen"/>
        <TextInput label="city name" theme={{colors:{primary:"#00aaff"}}} value={city} onChangeText={(text) => fecthCities(text)} />
        <Button mode='contained' theme={{colors:{primary:"#00aaff"}}} onPress={() => console.log('Pressed')}>
            <Text style={{color:"white"}}>Save Changes</Text>
        </Button>

        <FlatList data={cities} renderItem={({item}) => {
            return(
                <Card style={{margin:2, padding:12}}>
                    <Text>{item.name} - {item.region}</Text>
                </Card>
            )
        }} keyExtractor={item => item.id} />
    </View>
  );
};

export default Search;