import { type Config } from 'tailwindcss';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    darkGray: '#333333',
    orangeEnd: '#FB712A',
    orangeStart: '#FCC715',
    blueStart: '#0061DF',
    blueEnd: '#00AED4',
  },
} as const satisfies Config['theme'];
