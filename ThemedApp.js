import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import App from './App';
import {default as theme} from './assets/themes/theme.json'; // <-- Import app theme

const ThemedApp = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <App />
      </ApplicationProvider>
    </>
  );
};

export default ThemedApp;
