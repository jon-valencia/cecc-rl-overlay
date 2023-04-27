import { useSelector } from 'react-redux';

import isEmpty from 'functions/isEmpty';

import PlayerCards from './PlayerCards';
import './playercard.css';

function PlayerCardApp() {
    const players = useSelector((state) => state.players.players);
    const gamestate = useSelector((state) => state.gamestate);
    
    if(!isEmpty(players) && !isEmpty(gamestate)) {
        return (
            <PlayerCards players={players} gamestate={gamestate}/>
        )
    }
}

export default PlayerCardApp;