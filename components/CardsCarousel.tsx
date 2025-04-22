import React from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    runOnJS,
    Extrapolation,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Card from './Card';

const CardsCarousel: React.FC = () => {
    const width = Dimensions.get('window').width;
    const progress = useSharedValue(0);

    const colors: [string, string][] = [
        ["#5de0e6", "#004aad"],
        ["#E6A45D", "#AD2300"],
        //["#A8F46B", "#187705"],
    ];

    const currencies: string[] = [
        'USD', 
        'BS', 
        //'CrediExpress'
    ];

    const getAnimatedStyle = (index: number, totalCards: number) =>
        useAnimatedStyle(() => {
            const wrapAroundProgress = (progress: number, totalCards: number) => {
                return progress >= totalCards - 1
                    ? interpolate(progress, [totalCards - 1, totalCards], [totalCards - 1, 0], Extrapolation.CLAMP)
                    : progress;
            };
    
            const scale = interpolate(
                wrapAroundProgress(progress.value, totalCards),
                [
                    index - 1,
                    index,
                    index + 1
                ],
                [0.8, 1, 0.8],
                Extrapolation.CLAMP
            );            

            return {
                transform: [{ scale }],
            };
        }, [progress]);

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width * 0.55}
                autoPlay={false}
                data={[0, 1]}
                defaultIndex={0}
                onProgressChange={(offsetProgress, absoluteProgress) => {
                    progress.value = absoluteProgress;
                }}
                renderItem={({ index }: { index: number }) => {
                    const animatedStyle = getAnimatedStyle(index, colors.length);

                    return (
                        <Animated.View
                            style={[
                                { width: width * 0.8, alignSelf: 'center' },
                                animatedStyle,
                            ]}
                        >
                            <Card
                                width={width * 0.8}
                                colors={colors[index]}
                                currency={currencies[index]}
                            />
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
};

export default CardsCarousel;
