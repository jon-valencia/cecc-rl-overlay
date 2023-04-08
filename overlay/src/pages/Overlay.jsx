//import SocketContextProvider from 'contexts/SocketContexts';
import ScoreBugApp from 'components/ScoreBug/index';
import PlayerCardApp from 'components/PlayerCards/index';
import SpecPlayerApp from 'components/SpecPlayer/index';

function Overlay() { 
    return (
        <div className="overlay-container">
            <ScoreBugApp/>
            <PlayerCardApp/>
            <SpecPlayerApp/>
        </div>
    );
}

export default Overlay;