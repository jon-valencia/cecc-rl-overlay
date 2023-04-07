import { useContext, useEffect, useState } from "react";
import { SocketContext } from "contexts/SocketContexts";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function ControlPanel() {
    const [state, setState] = useContext(SocketContext);

    const [title, setTitle] = useState('');
    const [gameinfo, setGameinfo] = useState('')
    const [bestOf, setBestOf] = useState(3);
    const [team1SS, setTeam1Score] = useState(0);
    const [team2SS, setTeam2Score] = useState(0);

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleGameinfoChange = (event) => {
        setGameinfo(event.target.value)
    }
    const handleBestOfChange = (event) => {
        setBestOf(event.target.value)
    }
    const handleTeam1ScoreChange = (event) => {
        setTeam1Score(event.target.value)
    }
    const handleTeam2ScoreChange = (event) => {
        setTeam2Score(event.target.value)
    }

    function updateState() {
        useEffect(() => {
            setState({
                ...state,
                seriesInfo: {
                    title: title,
                    gameinfo: gameinfo,
                    team1SS: team1SS,
                    team2SS: team2SS,
                    seriesBestOf: bestOf
                }
            })
        },[title, gameinfo, team1SS, team2SS, bestOf]);
    };

    return (
        <Grid textAlign="center" alignItems="center" justifyContent="center">
            <h1>CURRENT MATCH</h1>
            <Container>
                {state.game.teams[0].score} - 00:00 - {state.game.teams[1].score}
                <hr/>
                {state.game.teams[0].name} VS {state.game.teams[1].name}
            </Container>
            <Container>
                <h2>SERIES INFO</h2>
                <hr/>
                <h3>{state.seriesInfo.title}</h3>
                <h3>{state.seriesInfo.gameinfo}</h3>
                <h3>SERIES SCORE</h3>
                <h4>{state.game.teams[0].name}:  0 | {state.game.teams[1].name}: 0</h4>
                <hr/>
            </Container>
            <Container>
                <Stack>
                    <div>Series Title:<TextField id="outlined-basic" label="CECC FINALS" variant="outlined" size="small" onChange={handleTitleChange}/></div>
                    <div>Game Info:<TextField id="outlined-basic" label="GAME 1 | BO7" variant="outlined" size="small" onChange={handleGameinfoChange}/></div>
                    <div>Team 1 series score:<TextField id="outlined-basic" label="0" variant="outlined" size="small" onChange={handleTeam1ScoreChange}/></div>
                    <div>Team 2 series score:<TextField id="outlined-basic" label="0" variant="outlined" size="small" onChange={handleTeam2ScoreChange}/></div>
                    <div>
                        BEST OF: 
                        <Select value={state.seriesInfo.seriesBestOf} onChange={handleBestOfChange}>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </div>
                    <Button variant="contained" onClick={updateState}>UPDATE</Button>
                </Stack>
            </Container>
        </Grid>
    )
};

export default ControlPanel;