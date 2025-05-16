import { extendTheme } from '@chakra-ui/react';


const styles = {
  global: () => ({
    body: {
      bg: '#fff !important',
      color: '#000'
    },
  }),
};



const colors = {
  brand: {
    100: "#7238F2",
    200: "#000326",
    300: "#030507",
    400: "#B8E681",
    500: "#F1EBFE",
    600: "#FF943B",
    700: "#8EA3FF",
    800: "#A17AF6",
    900: "#C6C7C3",
    1000: "#9A9A93",
    1100: "#C6C7C3",
  },

  alt: {
    100: "#667185",
    200: '#E4E7EC',
    300: '#F8F8F8',
    400: '#FFFFFFAB',
    500: '#8E61F3',
  },

  grey: {
    50: "#F9FAFB",
    75: "#F7F9FC",
    100: "#F0F2F5",
    200: "#E4E7EC",
    500: "#667185",
    600: "#475367",
    700: '#344054',
    800: '#1D2739',
  },

  semantics: {
    500: "#12B76A"
  }


};



const fonts = {
  heading: `'Switzer', sans-serif`,
  body: `'Inter', sans-serif`,
  general: `'General Sans', sans-serif`,
};


const components = {
  Switch: {
    baseStyle: {
      track: {
        bg: '#0B0709',
        _checked: {
          bg: "#0B0709",
        }
      },
      thumb: {
        bg: '#FFF',
        _checked: {
          bg: '#FFF',
        },
      },
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
