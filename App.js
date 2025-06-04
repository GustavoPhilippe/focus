// App.js (Updated to use RootNavigator)

import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { LogBox } from 'react-native';

// Ignore specific warnings if necessary (use cautiously)
LogBox.ignoreLogs(['new NativeEventEmitter']); // Example: Ignore warnings from specific libraries if they are known and harmless

const App = () => {
  // Ensure Firebase is initialized (handled natively and checked in RootNavigator)
  // The RootNavigator now handles the display logic based on auth state.
  return <RootNavigator />;
};

export default App;

