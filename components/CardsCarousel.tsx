import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Card from './Card';


export default function CardsCarousel() {
    const width = Dimensions.get('window').width;
    const colors: [[string, string], [string, string], [string, string]] = [
        ["#5de0e6", "#004aad"],
        ["#E6A45D", "#AD2300"],
        ["#A8F46B", "#187705"],
    ]
    const currencies: [string, string, string] = [
        'USD', 
        'BS',
        'CrediExpress'
    ]

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                mode='parallax'
                loop
                width={width}
                height={width * 0.55}
                autoPlay={false}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={1000}
                //onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            //flex: 1,
                            //borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Card width={350} colors={colors[index]} currency={currencies[index]}/>
                    </View>     
                )}
            />
        </View>
    );
}