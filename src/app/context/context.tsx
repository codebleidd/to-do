import { FunctionComponent, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { store, persistor } from '../store/appStore';
import { GlobalStyle, appTheme } from '../theme/theme';

export const AppContex: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={appTheme}>
        <Normalize />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
