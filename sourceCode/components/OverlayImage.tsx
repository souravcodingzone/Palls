import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Dimensions, ImageStyle, Animated} from 'react-native';
import {moderateScale} from '../utils/responsive';

interface OverlayImageProps {
  backgroundImage: any;
  overlayImage: any;
  overlayPosition?: 'top' | 'center' | 'bottom';
  overlaySize?: number;
}

const {width} = Dimensions.get('window');

const OverlayImage: React.FC<OverlayImageProps> = ({
  backgroundImage,
  overlayImage,
  overlayPosition = 'center',
  overlaySize = 100,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const getOverlayPosition = (): ImageStyle => {
    switch (overlayPosition) {
      case 'top':
        return {top: moderateScale(20)};
      case 'bottom':
        return {bottom: moderateScale(20)};
      default:
        return {top: '50%', marginTop: -overlaySize / 2};
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Animated.Image
        source={overlayImage}
        style={[
          styles.overlayImage,
          {
            width: moderateScale(overlaySize),
            height: moderateScale(overlaySize),
            ...getOverlayPosition(),
            opacity: fadeAnim,
            transform: [
              {
                translateX: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width, 0],
                }),
              },
            ],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: width * 0.9,
    alignSelf: 'center',
    marginVertical: moderateScale(20),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(15),
  },
  overlayImage: {
    position: 'absolute',
    left: '50%',
    marginLeft: -moderateScale(50),
    borderRadius: moderateScale(50),
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default OverlayImage; 