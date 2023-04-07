import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

function HomePage() {
   return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    >
        <ButtonGroup size="large" variant="contained">
            <Button component={Link} to="/overlay">OVERLAY</Button>
            <Button component={Link} to="/control-panel">CONTROL PANEL</Button>
        </ButtonGroup>
    </Grid> 
   )
};

export default HomePage;