import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Interest = () => {
  return (
    <LinearGradient
      colors={['#FEB413', '#F9F9F9']}
      locations={[0, 0.8]}
      style={styles.container}>
      <Text>wfrwrf</Text>
    </LinearGradient>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
