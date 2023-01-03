import Home from './home';
import Game from './games';
import gamesList from './games-config';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/games',
    element: <Game />,
    children: gamesList.map(({ path, element }) => ({ path, element })),
  },
];
