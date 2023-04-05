import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import isEmpty from 'functions/isEmpty';

import Card from './Card';
import './playercard.css';

function PlayerCardApp() {
    const [state] = useContext(SocketContext);
    
    if(!isEmpty(state.players)) {
        return (
            <div className="playercard-container">
                <Card players={state.players}/>
            </div>
        )
    }
}

export default PlayerCardApp;