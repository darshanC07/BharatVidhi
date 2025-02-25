import React, { useState } from 'react';
import { View } from 'react-native';
import Card from './Card';

const CardDeck = ({count,degree}) => {

    return (
        <View>
            {Array.from({ length: count }).map((_, i) =>
                <Card
                    key={i}
                    cardheight={90}
                    cardwidth={70}
                    title={"temp"}
                    eHeight={20}
                    eWidth={20}
                    type={"hi"}
                    style={{
                        transform: [{ rotate: degree }]
                    }}
                />
            )}
        </View>
    );
};

export default CardDeck;
