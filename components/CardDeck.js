import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const CardDeck = ({ count, degree }) => {
    // Convert string degree to number
    const rotationDeg = parseInt(degree);
    
    return (
        <View style={[styles.container, { transform: [{ rotate: degree }] }]}>
            {Array.from({ length: count }).map((_, i) => {
                const fanAngle = (i - (count - 1) / 2) * 10; // Fan angle
                const offsetX = (i - (count - 1) / 2) * 40; // Horizontal offset within fan
                
                return (
                    <Card
                        key={i}
                        cardheight={90}
                        cardwidth={70}
                        title={"temp"}
                        eHeight={20}
                        eWidth={20}
                        type={"hi"}
                        style={{
                            position: 'absolute',
                            transform: [
                                { translateX: offsetX },
                                { rotate: `${fanAngle}deg` },
                                { translateY: Math.abs(fanAngle) * 1.5 }
                            ],
                            zIndex: i,
                        }}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CardDeck;