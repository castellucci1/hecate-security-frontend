import { createTheme, alpha } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    darkAccent: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    darkAccent?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    darkAccent: true;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00B4D8',
      light: '#48CAE4',
      dark: '#0096C7',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2EC4B6',
      light: '#56CFB4',
      dark: '#1B9E8F',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4D4D',
      light: '#FF7373',
      dark: '#CC3D3D',
    },
    warning: {
      main: '#FFB800',
      light: '#FFCC40',
      dark: '#CC9200',
    },
    success: {
      main: '#2EC4B6',
      light: '#56CFB4',
      dark: '#1B9E8F',
    },
    neutral: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#475569',
      contrastText: '#FFFFFF',
    },
    darkAccent: {
      main: '#334155',
      light: '#475569',
      dark: '#1E293B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: alpha('#1E293B', 0.95),
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#1E293B', 0.6),
          '& .MuiTableCell-root': {
            color: '#F8FAFC',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: alpha('#475569', 0.2),
        },
      },
    },
  },
}); 