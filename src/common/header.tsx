import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const Triangle = styled('div')((props) => ({
	width: 0,
  	height: 0,
  	borderLeft: '20px solid transparent',
  	borderRight: '20px solid transparent',
  	borderBottom: '40px solid gray',
}));

function Header() {
	return (
		<Container>
			<Box sx={{ flexGrow: 0}}>
		      	<AppBar position="fixed">
		      		<Toolbar>	
						<Typography variant="h6" color="inherit" component="div">
							ADRENALIN
						</Typography>
						<Triangle/>
					</Toolbar>
	      		</AppBar>
	    	</Box>
    	</Container>
	)
}

export default Header