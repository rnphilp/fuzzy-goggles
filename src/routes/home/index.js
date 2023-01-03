import { Grid } from '@mui/material';

import GameCard from '../../components/game-cards';
import gamesList from '../games-config';

function ProjectsPage() {
  return (
    <main>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{
          overflow: 'auto',
          height: '100%',
          width: '100%',
          margin: 0,
          padding: '16px 0',
        }}
      >
        {gamesList.map(({ name, image, description }, i) => {
          return (
            <Grid key={name || i} item>
              <GameCard name={name} image={image} description={description} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}

export default ProjectsPage;
