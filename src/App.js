import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routesConfig from './routes/router-config';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div className="App">
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
