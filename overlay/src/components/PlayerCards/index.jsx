import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import PlayerCard from './PlayerCard';
import './playercard.css';

function PlayerCardApp() {
    const [state] = useContext(SocketContext);
    return (
        <div className="player-card">
            <PlayerCard/>
        </div>
    )   
}

export default PlayerCardApp;