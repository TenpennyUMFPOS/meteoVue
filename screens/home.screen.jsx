import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MainWeather from '../components/mainWeather.component';

const API_KEY = '3804ac37ac4512abc4e63c17c49a171b';

const HomeScreen = () => {
    const route = useRoute();
    const selectedCity = route.params?.cityName || 'Paris';

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
            if (response.status === 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    useEffect(() => {
        fetchWeatherData(selectedCity);
    }, [selectedCity]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator animating={true} size="large" />
            </View>
        );
    }

    return <MainWeather weatherData={weatherData} />;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    gradientContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    headline: {
        fontWeight: "bold",
        color: "#fff",
    },
    simpleT: {
        color: "#fff",
    },
    daysContainer: {
        position: 'absolute',
        bottom: "37%",
        left: '50%',
        transform: [{ translateX: -160 }],
        backgroundColor: '#fff',
        paddingVertical: 20,
        alignItems: 'center',
        width: 320,
        height: 190,
        textAlign: "center",
        borderRadius: 20,
    },
    dayButton: {
        margin: 5,
        padding: 5,
        borderRadius: 10,
        minWidth: 0,
        height: 100,
    },
    sv: {
        bottom: 20
    },
    daysView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: "30%"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
