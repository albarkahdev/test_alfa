/**
 * MOBILE BUILDER APP
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import styled from 'styled-components';
// initiate for react-navigation
import 'react-native-gesture-handler';
import ThemeManager from './contexts/ManageThemeContext';

import {getStore, getPersistor} from './src/redux/store';
import RootNavigation from './src/routes/route';
import {THEME} from './src/utils/theme';

const store = getStore();
const persistor = getPersistor();

const SafeAreaFlex = styled(SafeAreaView)`
  flex: 1;
`;

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="light-content" /> */}
      <ThemeManager>
        <SafeAreaFlex>
          <StoreProvider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <PaperProvider theme={THEME}>
                <RootNavigation />
              </PaperProvider>
            </PersistGate>
          </StoreProvider>
        </SafeAreaFlex>
      </ThemeManager>
    </>
  );
};

export default App;
