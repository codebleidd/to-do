import { createGlobalStyle } from 'styled-components';

export const theme = {
  shadow: '0 1px 3px rgba(0,0,0,0.12); 0 1px 2px rgba(0,0,0,0.24);',
  color: {
    blue: {
      900: '#035388',
      800: '#0B69A3',
      700: '#127FBF',
      600: '#1992D4',
      400: '#2BB0ED',
      300: '#40C3F7',
      500: '#5ED0FA',
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
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;500;600&display=swap');

body {
  background-color: ${(props) => props.theme.color.grey['50']};
  font-family: 'Merriweather', serif;
  color: #1F2933;
}

h1 {
  font-size: 60px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
}

h2 {
  font-size: 48px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
}

h3 {
  font-size: 36px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
}

h4 {
  font-size: 30px;
  font-weight: 400;
}

h5 {
  font-size: 24px;
  font-weight: 400;
}

h6 {
  font-size: 20px;
  font-weight: 400;
}
`;
