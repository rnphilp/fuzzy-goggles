import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
  },
});

export default theme;
