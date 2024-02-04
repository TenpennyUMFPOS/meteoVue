import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import citiesData from '../data/cities.json';

const CitiesScreen = ({ navigation }) => {
    const [cities, setCities] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [validCities, setValidCities] = useState([]);

    useEffect(() => {
        setValidCities(citiesData);
    }, []);

    const handleCityPress = (city) => {
        navigation.navigate('HomeScreen', { cityName: city });
    };

    const handleAddCity = () => {
        if (searchCity.trim() !== '') {
            if (validCities.includes(searchCity)) {
                setCities((prevCities) => [...prevCities, searchCity]);
                setSearchCity('');
            } else {
                Alert.alert('Error', 'Invalid city name. Please enter a valid city.');
            }
        } else {
            Alert.alert('Error', 'Please enter a city name');
        }
    };

    return (
        <LinearGradient colors={['#3d70d2', '#7ca9ff']} style={styles.containerLG}>
            <View style={styles.container}>
                <Text style={styles.title}>Select or Add a City:</Text>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Enter a city name"
                    value={searchCity}
                    onChangeText={(text) => setSearchCity(text)}
                    onSubmitEditing={handleAddCity}
                />
                <Button mode="contained" onPress={handleAddCity} style={styles.addButton}>
                    Add City
                </Button>
                <View style={styles.citiesContainer}>
                    {cities.map((city, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCityPress(city)} style={styles.cityButton}>
                            <Text style={styles.cityButtonText}>{city}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerLG: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#fff"
    },
    searchBar: {
        marginBottom: 10,
        width: '100%',
    },
    addButton: {
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#363B64',
        color: "black"
    },
    citiesContainer: {
        width: '100%',
        marginHorizontal: 10,
        marginTop: 25,
    },
    cityButton: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    cityButtonText: {
        color: '#363B64',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default CitiesScreen;
