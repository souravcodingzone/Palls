import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors, FontsFamilys} from '../constant';

interface HeaderProps {
  containerstyle?: ViewStyle;
  leftIcon?: ImageSourcePropType;
  CenterImage?: ImageSourcePropType;
  centerText?: string;
  RightIcon?: ImageSourcePropType;
  onPressLeftImg?: () => void;
  centerImageStyle?: ImageStyle;
  rightImageStyle?: ViewStyle;
  leftIconStyle?: ViewStyle;
  centerTextStyle?: ViewStyle;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={[styles.container, props?.containerstyle]}>
      <TouchableOpacity
        style={[styles.backButton, props?.leftIconStyle]} 
        onPress={props?.onPressLeftImg}>
        <Image source={props?.leftIcon} resizeMode="contain" />
      </TouchableOpacity>
      {props?.centerText ? (
        <Text style={[styles.centerText, props?.centerTextStyle]}>
          {props.centerText}
        </Text>
      ) : (
        <Image
          source={props?.CenterImage}
          resizeMode="contain"
          style={props?.centerImageStyle}
        />
      )}
      <Image
        source={props?.RightIcon}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  backButton: {
    backgroundColor: Colors.white,
    borderRadius: 60,
    borderWidth: 2,
    padding: 10,
  },
  centerText: {
    fontSize: 20,
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: Colors.Black,
  },
});
