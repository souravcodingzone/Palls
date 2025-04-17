import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from '../utils/responsive';
import { FontsFamilys } from '../constant';

interface ToggleSwitchProps {
  options: string[];
  activeOption: string;
  onChange: (value: string) => void;
}

const ToggleButtons: React.FC<ToggleSwitchProps> = ({
  options,
  activeOption,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const isActive = option === activeOption;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <TouchableOpacity
            key={option}
            style={[
              styles.button,
              isActive && styles.activeButton,
              isFirst && styles.leftRadius,
              isLast && styles.rightRadius,
            ]}
            onPress={() => onChange(option)}>
            <Text style={[styles.text, isActive && styles.activeText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: moderateScale(15),
    borderWidth: 2,
    borderColor: '#333',
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '83%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: moderateScale(7),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:moderateScale(3)
  },
  activeButton: {
    backgroundColor: '#FEB413',
    borderRadius:moderateScale(13),
  },
  text: {
    color: '#333',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  activeText: {
    color: '#000',
  },
  leftRadius: {
    borderTopLeftRadius: moderateScale(15),
    borderBottomLeftRadius: moderateScale(15),
  },
  rightRadius: {
    borderTopRightRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
  },
});

export default ToggleButtons;
