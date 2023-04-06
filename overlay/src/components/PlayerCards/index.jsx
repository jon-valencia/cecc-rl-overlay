import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import isEmpty from 'functions/isEmpty';

import PlayerCards from './PlayerCards';
import './playercard.css';

function PlayerCardApp() {
    const [state] = useContext(SocketContext);
    
    if(!isEmpty(state.players) && !isEmpty(state.gamestate)) {
        return (
            <PlayerCards players={state.players} gamestate={state.gamestate}/>
        )
    }
}

export default PlayerCardApp;