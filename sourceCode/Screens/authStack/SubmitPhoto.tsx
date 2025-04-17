import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import {FontsFamilys, ImageUrl, Texts} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale} from '../../utils/responsive';
import CustomTextInput from '../../components/CustomTextInput';

const SubmitPhoto = () => {
  const navigation = useNavigation();

  return (
   <View style={styles.container}>
    <Text>SubmitPhoto</Text>
   </View>
  );
};

export default SubmitPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
