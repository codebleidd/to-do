import { createGlobalStyle } from 'styled-components';

export const appTheme = {
  shadow: {
    inset: 'inset 0 2px 2px hsla(0, 0%, 0%, 0.1)',
    0: '0 1px 3px rgba(0,0,0,0.12); 0 1px 2px rgba(0,0,0,0.24);',
    1: '0 15px 25px rgba(0,0,0,0.15); 0 5px 10px rgba(0,0,0,0.05);',
  },
  border: { radius: '6px' },
  color: {
    error: '#EF4E4E',
    warning: '#CB6E17',
    success: '#0C6B58',
    palette: {
      blue: {
        900: '#035388',
        800: '#0B69A3',
        700: '#127FBF',
        600: '#1992D4',
        500: '#2BB0ED',
        400: '#40C3F7',
        300: '#5ED0FA',
        200: '#81DEFD',
        100: '#B3ECFF',
        50: '#E3F8FF',
      },

      grey: {
        900: '#1F2933',
        800: '#323F4B',
        700: '#3E4C59',
        600: '#52606D',
        400: '#616E7C',
        300: '#7B8794',
        500: '#9AA5B1',
        200: '#CBD2D9',
        100: '#E4E7EB',
        50: '#F5F7FA',
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.color.palette.grey['900']};
  font-family: 'Merriweather', serif;
  color: ${({ theme }) => theme.color.palette.grey['50']};
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0 0 8px;
  padding: 0;
}

h1 {
  font-size: 60px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 32px;
}

h2 {
  font-size: 48px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 28px;
}

h3 {
  font-size: 36px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 24px;
}

h4 {
  font-size: 28px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 20px;
}

h5 {
  font-size: 22px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 16px;
}

h6 {
  font-size: 18px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 12px;
}

p {
  font-size: 14px;
  line-height: 1.4;
}
`;
