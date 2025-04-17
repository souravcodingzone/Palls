import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const CustomCarousel = ({ data, renderItem, onSwipe }) => {
  const currentIndex = useSharedValue(0);
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      translateX.value = e.translationX;
    })
    .onEnd(e => {
      if (Math.abs(e.translationX) > SWIPE_THRESHOLD) {
        const direction = e.translationX > 0 ? -1 : 1;
        translateX.value = withSpring(direction * SCREEN_WIDTH, {}, () => {
          runOnJS(handleSwipe)(direction);
          translateX.value = 0;
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const handleSwipe = (direction: number) => {
    const nextIndex = currentIndex.value + 1;
    if (nextIndex < data.length) {
      currentIndex.value = nextIndex;
      onSwipe?.(nextIndex);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {data
          .map((item, i) => {
            const isTopCard = i === currentIndex.value;
            const animatedStyle = useAnimatedStyle(() => ({
              transform: [
                { translateX: isTopCard ? translateX.value : 0 },
                { rotate: isTopCard ? `${translateX.value / 20}deg` : '0deg' },
                { scale: isTopCard ? 1 : 0.95 },
              ],
              zIndex: data.length - i,
            }));

            return (
              <GestureDetector gesture={isTopCard ? panGesture : undefined} key={i}>
                <Animated.View style={[styles.card, animatedStyle]}>
                  {renderItem({ item, index: i })}
                </Animated.View>
              </GestureDetector>
            );
          })
          .reverse()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    width: moderateScale(SCREEN_WIDTH * 0.9),
    height: verticalScale(450), // adjust as needed
    borderRadius: moderateScale(20),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default CustomCarousel;
