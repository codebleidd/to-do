import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { PageHeader } from './component/PageHeader';
import { store } from './store/app.store';
import { GlobalStyle, theme } from './theme/theme';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <PageHeader />
    </ThemeProvider>
  </Provider>
);
