//import SocketContextProvider from 'contexts/SocketContexts';
import ScoreBugApp from 'components/ScoreBug/index';
import PlayerCardApp from 'components/PlayerCards/index';
import SpecPlayerApp from 'components/SpecPlayer/index';
import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

function Overlay() { 
    const state = useContext(SocketContext);
    return (
        <div className="overlay-container">
            {state.game.time_seconds}
            <ScoreBugApp/>
            <PlayerCardApp/>
            <SpecPlayerApp/>
        </div>
    );
}

export default Overlay;