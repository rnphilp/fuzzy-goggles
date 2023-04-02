/** @jsxImportSource @emotion/react */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import routesConfig from './routes/router-config';
import theme from './theme';

const router = createBrowserRouter(routesConfig);

const styles = {
  main: {
    width: '100vw',
    height: '100%',
    minHeight: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main css={styles.main}>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
