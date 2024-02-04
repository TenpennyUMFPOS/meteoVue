import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Button, Searchbar, Snackbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import citiesData from '../data/cities.json';


const CitiesScreen = ({ navigation }) => {
    const [cities, setCities] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [validCities, setValidCities] = useState([]);

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

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
                Alert.alert('Invalid city name. Please enter a valid city.');
            }
        } else {
            Alert.alert('Please enter a city name');
        }
    };

    const handleCityLongPress = (index) => {
        Alert.alert(
            'City Options',
            '',
            [
                {
                    text: 'Consult',
                    onPress: () => handleCityPress(cities[index]),
                },
                {
                    text: 'Delete',
                    onPress: () => handleDeleteCity(index),
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    const handleDeleteCity = (index) => {
        const updatedCities = [...cities];
        updatedCities.splice(index, 1);
        setCities(updatedCities);
    };

    return (
        <LinearGradient colors={['#e9e9e9', '#e9e9e9']} style={styles.containerLG}>
            <View style={styles.container}>
                <View style={styles.searchButtonContainer}>
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
                </View>
                <View style={styles.citiesContainer}>
                    <Button style={{ alignSelf: 'flex-end', backgroundColor: "#fff", marginBottom: 20 }} onPress={onToggleSnackBar}> ❗ </Button>
                    {cities.map((city, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCityPress(city)}
                            onLongPress={() => handleCityLongPress(index)}
                            style={styles.cityButton}
                        >
                            <Text style={styles.cityButtonText}> 📍 {city}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'X',
                }}>
                Long Press on a city to view more options!
            </Snackbar>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    containerLG: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 40,
    },
    searchBar: {
        flex: 1,
        marginBottom: 10,
    },
    addButton: {
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#363B64',
        color: 'black',
        height: 40,
    },
    citiesContainer: {
        width: '100%',
        marginHorizontal: 10,
        marginTop: 40,
        right: 10
    },
    cityButton: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    cityButtonText: {
        color: '#363B64',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default CitiesScreen;
