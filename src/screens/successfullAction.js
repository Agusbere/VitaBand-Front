import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CONFETTI_COLORS = ['#007FFF', '#05D2FF', '#3787E5', '#A0CFFF', '#fff', '#222'];
const CONFETTI_SHAPES = ['circle', 'square', 'wave'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Confetti = ({ count = 80, duration = 3400 }) => {
    const confetti = Array.from({ length: count }).map((_, i) => ({
        left: getRandomInt(0, width),
        top: getRandomInt(-40, -30),
        delay: getRandomInt(0, 600),
        color: CONFETTI_COLORS[getRandomInt(0, CONFETTI_COLORS.length - 1)],
        shape: CONFETTI_SHAPES[getRandomInt(0, CONFETTI_SHAPES.length - 1)],
        rotate: getRandomInt(-60, 60),
        size: getRandomInt(8, 18),
        key: i,
    }));

    const anims = useRef(confetti.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        Animated.stagger(15,
            anims.map((anim, i) =>
                Animated.timing(anim, {
                    toValue: 1,
                    duration: duration + confetti[i].delay,
                    delay: confetti[i].delay,
                    useNativeDriver: true,
                })
            )
        ).start();
    }, []);

    return (
        <View style={[StyleSheet.absoluteFill, { zIndex: 999 }]} pointerEvents="box-none">
            {confetti.map((c, i) => {
                let shapeStyle = {};
                if (c.shape === 'circle') {
                    shapeStyle = { borderRadius: c.size / 2 };
                } else if (c.shape === 'square') {
                    shapeStyle = {};
                } else if (c.shape === 'wave') {
                    shapeStyle = {
                        borderRadius: c.size / 2,
                        width: c.size * 1.5,
                        height: c.size / 2,
                        backgroundColor: c.color,
                        transform: [{ rotate: `${c.rotate}deg` }],
                    };
                }

                return (
                    <Animated.View
                        key={c.key}
                        style={[
                            {
                                position: 'absolute',
                                left: c.left,
                                top: c.top,
                                opacity: anims[i].interpolate({
                                    inputRange: [0, 0.8, 1],
                                    outputRange: [1, 1, 0],
                                }),
                                transform: [
                                    {
                                        translateY: anims[i].interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, height - 40],
                                        }),
                                    },
                                    { rotate: `${c.rotate}deg` },
                                ],
                                zIndex: 999,
                                width: c.shape === 'wave' ? c.size * 1.5 : c.size,
                                height: c.shape === 'wave' ? c.size / 2 : c.size,
                                backgroundColor: c.shape === 'wave' ? undefined : c.color,
                                borderRadius: c.shape === 'circle' ? c.size / 2 : 3,
                            },
                            shapeStyle,
                        ]}
                    />
                );
            })}
        </View>
    );
};

const SuccessfullAction = ({
    route,
    navigation,
    title,
    description,
    buttonText,
    showConfetti = true,
}) => {
    const _title = title || route?.params?.title || '¡Successfully completed!';
    const _description = description || route?.params?.description || 'The action was completed successfully.';
    const _buttonText = buttonText || route?.params?.buttonText || 'Go back';
    const _onButtonPress = route?.params?.onButtonPress;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{_title}</Text>
            <View style={styles.checkWrapper}>
                <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={48} color="#fff" />
                </View>
            </View>
            <Text style={styles.description}>{_description}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={
                    _onButtonPress
                        ? _onButtonPress
                        : () => navigation.goBack()
                }
            >
                <Text style={styles.buttonText}>{_buttonText}</Text>
            </TouchableOpacity>
            {showConfetti && <Confetti />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    title: {
        fontSize: 22,
        fontFamily: 'PlusJakartaSans-Bold',
        color: '#222',
        marginBottom: 24,
        textAlign: 'center',
    },
    checkWrapper: {
        marginBottom: 18,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#2196F3',
        borderWidth: 8,
        borderColor: '#007FFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    description: {
        color: '#888',
        fontFamily: 'PlusJakartaSans-Regular',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 24,
        maxWidth: 300,
    },
    button: {
        backgroundColor: '#007FFF',
        borderRadius: 25,
        width: '85%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'PlusJakartaSans-Bold',
        fontSize: 16,
    },
});

export default SuccessfullAction;

//PARA PROBAR QUE ANDA
// onLogin={() => navigation.navigate('SuccessfullAction', {
//   title: '¡Welcome!',
//   buttonText: 'Go to Home',
//   // Puedes usar navigation.goBack o navigation.replace según tu flujo
//   onButtonPress: () => navigation.goBack(),
// })} 
