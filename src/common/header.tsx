import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

function Header() {
	return (
		<Container maxWidth="sm">
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<h1>Header</h1>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Header