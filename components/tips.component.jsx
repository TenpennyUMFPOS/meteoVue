import React from 'react';
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const tipsComp = () => {
    const TIPS = [
        "Start your day with a smile!",
        "Take a deep breath and relax when you feel stressed.",
        "Stay hydrated throughout the day.",
        "A 20-minute walk can do wonders for your mood.",
        "Practice gratitude daily.",
        "Don't forget to get enough sleep.",
        "Connect with loved ones regularly.",
        "Learn something new each day.",
        "Take breaks to stretch and move around.",
        "Enjoy a healthy and balanced diet."
    ];

    const getRandomTip = () => {
        const randomIndex = Math.floor(Math.random() * TIPS.length);
        return TIPS[randomIndex];
    }

    const randomTip = getRandomTip();

    return (
        <>
            <View>
                <Text variant='titleLarge' style={styles.titles}>Tips</Text>
            </View>
            <View style={styles.container}>
                <Text variant="labelLarge" style={{ color: "#363B64", left: 10 }}> ✨ {randomTip}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        display: "flex",
        bottom: 15,
        borderRadius: 15,
        height: 50,
        justifyContent: "center",
    },
    titles: {
        color: "#363B64", bottom: 25, left: 34
    }
});

export default tipsComp;
