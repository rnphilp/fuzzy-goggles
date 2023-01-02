import PT from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

function ActionAreaCard({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/images/${image}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ActionAreaCard.defaultProps = { description: '', image: 'wip.jpeg' };

ActionAreaCard.propTypes = {
  name: PT.string.isRequired,
  description: PT.string,
  image: PT.string,
};

export default ActionAreaCard;
