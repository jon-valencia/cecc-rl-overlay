import SocketContextProvider from 'contexts/SocketContexts';
import ScoreBugApp from 'components/ScoreBug/index';
import PlayerCardApp from 'components/PlayerCards/index';
import SpecPlayerApp from 'components/SpecPlayer/index';


import './App.css';

function App() { 
    return (
        <SocketContextProvider>
            <ScoreBugApp/>
            <PlayerCardApp/>
            <SpecPlayerApp/>
        </SocketContextProvider>
    );
}

export default App;