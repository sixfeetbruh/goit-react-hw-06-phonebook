
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { theme } from './constants/theme';
import { App } from './components/App';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);