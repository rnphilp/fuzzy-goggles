import PT from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ActionAreaCard({ name, description, image, link }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => navigate(link)}>
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

ActionAreaCard.defaultProps = {
  description: '',
  image: 'wip.jpeg',
  link: '',
};

ActionAreaCard.propTypes = {
  name: PT.string.isRequired,
  description: PT.string,
  image: PT.string,
  link: PT.func,
};

export default ActionAreaCard;
