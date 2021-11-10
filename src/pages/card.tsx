import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kilimanjaro from '../img/kilimanjaro.jpg';

interface ICardData {
	title: string
	title_long: string
	img: string
}

export default function CardComponent({title, title_long, img}: ICardData) {
	return (
		<Card sx={{ maxWidth: 345 }}>
	      <CardMedia
	        component="img"
	        height="140"
	        image={kilimanjaro}
	        alt="green iguana"
	      />
	      <CardContent>
	        <Typography gutterBottom variant="h5" component="div">
	          {title}
	        </Typography>
	        <Typography variant="body2" color="text.secondary">
	          {title_long}
	        </Typography>
	      </CardContent>
	    </Card>
	)
}