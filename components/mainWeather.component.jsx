import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import tempImage from '../assets/details/temp.png';
import windImage from '../assets/details/wind.png';
import sunImage from '../assets/details/sun.png';
import rainImage from '../assets/details/rain.png';
import TipsComp from './tips.component';
const mainWeather = ({ weatherData }) => {
    const {
        name,
        weather: [{ icon, description }],
        main: { temp, humidity, temp_max },
        wind: { speed },
        sys: { sunrise }
    } = weatherData;

    const timeSlots = ['2 pm', '3 pm', '4 pm', '5 pm'];
    const convertCelsiusToFahrenheit = (celsius) => {
        const fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit.toFixed(1);
    }

    return (
        <PaperProvider
            theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: 'transparent' } }}
        >
            <View style={styles.container}>
                <LinearGradient
                    colors={["#3d70d2", "#7ca9ff"]}
                    style={styles.gradientContainer}
                >
                    <View style={styles.content}>
                        <Image
                            source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text variant="headlineLarge" style={styles.headline}>
                            {temp} °C
                        </Text>
                        <Text variant="headlineSmall" style={styles.simpleT}>
                            {description}
                        </Text>
                    </View>
                </LinearGradient>
            </View>
            <LinearGradient colors={["#c7d8fb", "#fff"]} style={styles.daysContainer}>
                <View style={styles.daysView}>
                    <LinearGradient
                        colors={["#3d70d2", "#7ca9ff"]}
                        style={styles.today}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={styles.todayT} variant="titleMedium">
                            Today
                        </Text>
                    </LinearGradient>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.sv}>
                        {timeSlots.map((timeSlot, index) => (
                            <View key={index} style={styles.dayButton}>
                                <Text style={{ color: "#A098AE" }}>{timeSlot}</Text>

                                <View>
                                    <Image source={rainImage} style={{ width: 50, height: 50 }} />
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </LinearGradient>
            <View style={{ top: 180 }}>
                <Text variant='titleLarge' style={styles.titles}>Details</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsView}>
                    <Image source={tempImage} style={{ width: 50, height: 50, }} />
                    <View style={{ left: 10 }}>
                        <Text style={{ color: "#363B64", fontWeight: "bold", fontSize: 18 }} variant='titleLarge'>{convertCelsiusToFahrenheit(temp)}°</Text>
                        <Text style={{ color: "#A098AE" }} variant='labelSmall'>Fahrenheit </Text>
                    </View>
                </View>
                <View style={styles.detailsView}>
                    <Image source={windImage} style={{ width: 50, height: 50, }} />
                    <View style={{ left: 10 }}>
                        <Text style={{ color: "#363B64", fontWeight: "bold", fontSize: 18 }} variant='titleLarge'>{speed} mp/h </Text>
                        <Text style={{ color: "#A098AE" }} variant='labelSmall'>Pressure </Text>
                    </View>
                </View>


            </View>


            <View style={styles.secondDetailsContainer}>
                <View style={styles.detailsView}>
                    <Image source={sunImage} style={{ width: 50, height: 50, }} />
                    <View style={{ left: 10 }}>
                        <Text style={{ color: "#363B64", fontWeight: "bold", fontSize: 18 }} variant='titleLarge'>{temp_max}°C</Text>
                        <Text variant='labelSmall' style={{ color: "#A098AE" }}>Max Tempreture </Text>
                    </View>
                </View>
                <View style={styles.detailsView}>
                    <Image source={rainImage} style={{ width: 50, height: 50, }} />
                    <View style={{ left: 10 }}>
                        <Text style={{ color: "#363B64", fontWeight: "bold", fontSize: 18 }} variant='titleLarge'>{humidity} %</Text>
                        <Text style={{ color: "#A098AE" }} variant='labelSmall'>Humidity </Text>
                    </View>
                </View>


            </View>

            <TipsComp />
        </PaperProvider>
    );
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
        height: 400,
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
        width: 150,
        height: 150,
        marginBottom: 0,
    },
    headline: {
        fontWeight: "bold",
        color: "#fff",
        bottom: 15,
    },
    simpleT: {
        color: "#fff",
        bottom: 10,
    },
    today: {
        right: 1,
        color: "#fff",
        width: 100,
        height: 30,
        borderRadius: 15,
    },
    todayT: {
        color: "#fff",
        alignSelf: "center",
        top: 2,
    },
    daysContainer: {
        position: 'absolute',
        bottom: "40%",
        left: '50%',
        transform: [{ translateX: -160 }],
        backgroundColor: '#fff',
        paddingVertical: 20,
        alignItems: 'center',
        width: 320,
        height: 150,
        textAlign: "center",
        borderRadius: 20,
    },
    dayButton: {
        margin: 5,
        padding: 5,
        borderRadius: 10,
        minWidth: 80,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titles: {
        color: "#363B64", bottom: 227, left: 34
    },
    sv: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    daysView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        top: 120

    },
    secondDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
        top: 120
    },

    detailsView: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 10,
        height: 150,
        bottom: 150,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center'

    },
});

export default mainWeather;
