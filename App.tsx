import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {ThemeProvider, useTheme} from './sourceCode/utils/ThemeProvider';
import RootNavigator from './sourceCode/navigation/RootNavigator';

if (__DEV__) {
  require('./ReactotronConfig');
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const theme = useTheme();
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={
          theme.colors.background === '#000' ? 'light-content' : 'dark-content'
        }
      />
      <RootNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {flex: 1},
});
