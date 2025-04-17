import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {FontSize} from '../constant';
import {moderateScale} from '../utils/responsive';

const CustomTextInput = (props: any) => {
  return (
     <View style={[styles.inputContainer, props?.inputViewStyle]}>
      <View style={styles.row}>
        {/* ✅ 2. If there's a leftComponent, render it before the TextInput */}
        {props.leftComponent && (
          <View style={styles.leftComponent}>{props.leftComponent}</View>
        )}

        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor || '#9A9A9A'}
          maxLength={props?.length}
          keyboardType={props?.keyboardType}
          onChangeText={props?.onChangeText}
          value={props?.value}
          autoCapitalize={props?.autoCapitalize}
          secureTextEntry={props?.secureTextEntry}
          style={[styles.input, props?.inputStyle]}
          editable={props?.editable}
          multiline={props?.multiline}
          onFocus={props?.onFocus}
          numberOfLines={props?.numberOfLines}
          onBlur={props?.onBlur}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  // inputContainer: {
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   paddingHorizontal: 10,
  //   height: 54,
  //   justifyContent: 'center',
  //   marginTop: 15,
  //   width: '96%',
  //   borderWidth: 1,
  //   borderColor: '#6D7688',
  //   marginLeft: moderateScale(8),
  // },
  // input: {
  //   fontSize: FontSize.sixteen,
  //   color: '#000',
  //   width: '100%',
  // },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  
  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(6),
  },
  
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 54,
    justifyContent: 'center',
    marginTop: 15,
    width: '96%',
    borderWidth: 1,
    borderColor: '#6D7688',
    marginLeft: moderateScale(8),
  },
  
  input: {
    fontSize: FontSize.sixteen,
    color: '#000',
    flex: 1,
  },
  
});
