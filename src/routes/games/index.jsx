import { Outlet } from 'react-router-dom';

function GamePage() {
  return (
    <>
      <p>game wrapper code in here</p>
      <Outlet />
    </>
  );
}

export default GamePage;
