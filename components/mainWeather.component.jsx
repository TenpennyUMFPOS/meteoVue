import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const mainWeather = ({ weatherData }) => {
    const {
        name,
        weather: [{ icon, description }],
        main: { temp, humidity },
    } = weatherData;

    const timeSlots = ['2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];

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
                                <Text>{timeSlot}</Text>
                                <Text>Test</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </LinearGradient>
            <View>
                <Text variant='titleLarge' style={styles.titles}>Details</Text>
            </View>
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
        minWidth: 80,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }, titles: {
        color: "#363B64", bottom: 250, left: 25
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
});

export default mainWeather;
