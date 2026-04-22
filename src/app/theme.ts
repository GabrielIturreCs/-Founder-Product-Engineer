import { createTheme, MantineColorsTuple } from '@mantine/core';

const kiloGreen: MantineColorsTuple = [
  '#e6fffa',
  '#b2f5ea',
  '#81e6d9',
  '#4fd1c5',
  '#38b2ac',
  '#319795',
  '#2c7a7b',
  '#285e61',
  '#234e52',
  '#10B981', // Kilo Green primary
];

export const theme = createTheme({
  primaryColor: 'teal', // or use the custom kiloGreen if defined properly
  colors: {
    kiloGreen,
  },
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        withBorder: true,
      },
    },
  },
});
