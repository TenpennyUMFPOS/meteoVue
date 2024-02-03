import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Image, View } from 'react-native';
import LogoImage from '../assets/logos/mainLogo.png';
import { Text, TouchableRipple } from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
    HandleOnPress = () => {
        navigation.navigate('CitiesScreen')
    }
    return (
        <LinearGradient colors={['#3d70d2', '#7ca9ff']} style={styles.container}>
            <TouchableRipple
                onPress={HandleOnPress}
                rippleColor="rgba(0, 0, 0, .20)"
                style={styles.touchableContainer}
            >
                <View style={styles.contentContainer}>
                    <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title} variant="headlineSmall">MeteoVue</Text>
                    <Text style={styles.subtitle} variant="titleMedium">Navigate Your Weather Journey.</Text>
                </View>
            </TouchableRipple>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    touchableContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        fontSize: 24,
        fontFamily: 'Roboto',
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        marginTop: 20
    },
});

export default SplashScreen;
