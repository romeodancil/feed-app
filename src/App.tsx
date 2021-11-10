import './App.css';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Container'

function App() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Main Content
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
