import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Card from './Card';

export default function CardsCarousel() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                
                loop
                width={width}
                height={width * 0.65}
                autoPlay={false}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={1000}
                //onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            //borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Card width={320}/>
                    </View>     
                )}
            />
        </View>
    );
}