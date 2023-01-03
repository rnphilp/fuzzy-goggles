import kebabCase from 'lodash/kebabCase';
import WordLock from './games/word-lock';

const config = [
  {
    name: 'word lock',
    description: 'Get creative with the letters. Can you solve the grid?',
    element: <WordLock />,
  },
  {
    name: 'hangman',
    description: "Classic, but can you figure it out before it's too late?",
    element: <p>game...</p>,
  },
  {
    name: 'bottles',
    description:
      "Everything's has been mixed up... Can you get back to a bottle of each colour?",
    element: <p>game...</p>,
  },
  { name: 'some other game', element: <p>game...</p> },
  { name: 'a different game', element: <p>game...</p> },
  { name: 'something else', element: <p>game...</p> },
  { name: 'what else could there be', element: <p>game...</p> },
  { name: 'imaginative mock game', element: <p>game...</p> },
  { name: 'random tiles', element: <p>game...</p> },
];

export default config.map(game => ({
  path: kebabCase(game.name),
  ...game,
}));
