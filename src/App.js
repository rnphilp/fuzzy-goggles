import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import routesConfig from './routes/router-config';
import theme from './theme';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
