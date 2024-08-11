
import { background, extendTheme } from '@chakra-ui/react';
import {colors} from "./Foundations/colors"

const config = {
  initialColorMode: "light",
}

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
        background : "#fff"
      },
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
  colors,
  fontSizes: {
    tiny: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  config
});



export default theme;
