import { data } from '../actions/request'
import CardComponent from './card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function List() {
	const renderList = () => {
		return data.map((list: any) => {
			return (
				<Grid item xs={6} sm={4}>
					<CardComponent title={list.title} title_long={list.title_long} img='kilimanjaro'/>
				</Grid>
			)
		})
	}

	return (
		<Container>
			<Box sx={{marginTop: '80px'}}>
				<Grid container spacing={2}>
					{renderList()}
				</Grid>
			</Box>
		</Container>
	)
}

export default List