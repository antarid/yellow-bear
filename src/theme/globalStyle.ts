import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      dark: string;
      light: string;
      grey: string;
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
`;

export const theme: DefaultTheme = {
  colors: {
    primary: '#7ED321',
    dark: '#000',
    light: '#fff',
    grey: '#EAEAEA',
  },
};
