import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

function Header() {
	return (
		<Box sx={{ flexGrow: 0 }}>
	      	<AppBar position="static" sx={{backgroundColor: grey[500], marginTop: '20px'}}>
		        <Toolbar variant="dense">
		          <Typography variant="h6" color="inherit" component="div">
		            ADRENALIN
		          </Typography>
		        </Toolbar>
      		</AppBar>
    	</Box>
	)
}

export default Header