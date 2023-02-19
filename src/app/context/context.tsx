import { FunctionComponent, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { store } from '../store/app.store';
import { GlobalStyle, theme } from '../theme/theme';

export const AppContex: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </Provider>
);
