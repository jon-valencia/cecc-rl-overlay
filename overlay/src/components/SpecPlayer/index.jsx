import { SvgLoader, SvgProxy } from 'react-svgmt';
import { useSelector } from 'react-redux';

import SpecPlayer from './SpecPlayer';
import './specplayer.css';

import isEmpty from 'functions/isEmpty';

function SpecPlayerApp() {
  const gameinfo = useSelector((state) => state.gameinfo);
  const specPlayer = useSelector((state) => state.specPlayer);
  const gamestate = useSelector((state) => state.gamestate);
  const players = useSelector((state) => state.players.players);
  const control = useSelector((state) => state.payload.control);

  let theme = 'assets/specplayer/default.svg'

  if(!isEmpty(specPlayer) && !isEmpty(gamestate) && !isEmpty(players)) {
    if(gamestate.hasTarget === true && gameinfo.isReplay === false) {
      return (
        <div className="specplayer">
          <SpecPlayer specPlayer={specPlayer} gamestate={gamestate} control={control}/>
        </div>
      )
    }
  } else {
    return (
      <div className="specplayer">
        <SvgLoader path={theme}>
          <SvgProxy selector="#specCardBase" fill="#121212"/>
          <SvgProxy selector="#primaryColorStart" stop-color="white"/>
          <SvgProxy selector="#primaryColorStop" stop-color="white"/>
          <SvgProxy selector="#specLogo" href="https://upload.wikimedia.org/wikipedia/commons/1/16/100_Thieves_logo.svg"/>
          <SvgProxy selector="#specCard2" fill="white"/>    
        </SvgLoader>
      </div>
    )
  }
}

export default SpecPlayerApp;