import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      dark: string;
      light: string;
      grey: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit; 
    text-decoration: inherit; 
  }
`;

export const theme: DefaultTheme = {
  colors: {
    primary: '#7ED321',
    dark: '#000',
    light: '#fff',
    grey: '#EAEAEA',
  },
  breakpoints: {
    mobile: '700px',
  },
};
