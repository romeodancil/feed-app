import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function Footer() {
	return (
		<Container maxWidth="sm">
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<h1>Footer</h1>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Footer