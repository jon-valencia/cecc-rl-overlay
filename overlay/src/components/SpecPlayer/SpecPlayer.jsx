import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from 'functions/toPercent';

const SpecPlayer = ({ specPlayer, gamestate, control }) => {
  SpecPlayer.propTypes = {
    specPlayer:PropTypes.object,
    gamestate:PropTypes.object,
    control:PropTypes.object
  } 
  let team1PC = gamestate.teamColors[0].primary;
  let team2PC = gamestate.teamColors[1].primary;
  if (control.team1Logo !== '' && control.team1Logo !== ''){
    var team1Logo = control.team1Logo;
    var team2Logo = control.team2Logo;
  } else {
    var team1Logo = '';
    var team2Logo = '';
  }
  let theme = 'assets/specplayer/default.svg';
  return (
    gamestate && specPlayer && control &&
    (
      <SvgLoader path={theme}>
        <SvgProxy selector="#primaryColor" stop-color={specPlayer.team ? team2PC : team1PC}/>
        <SvgProxy selector="#specLogo" href={specPlayer.team ? team2Logo : team1Logo}/>        
        <SvgProxy selector="#specCard2" fill={specPlayer.team ? team2PC : team1PC}/>
        <SvgProxy selector="#specName">{`${specPlayer.player.toUpperCase()}`}</SvgProxy>
        <SvgProxy selector="#specScore">{`${specPlayer.score}`}</SvgProxy>
        <SvgProxy selector="#specGoals">{`${specPlayer.goals}`}</SvgProxy>
        <SvgProxy selector="#specAssists">{`${specPlayer.assists}`}</SvgProxy>
        <SvgProxy selector="#specSaves">{`${specPlayer.saves}`}</SvgProxy>
        <SvgProxy selector="#specShots">{`${specPlayer.shots}`}</SvgProxy>
        <SvgProxy selector="#specBoost" width={`${toPercent(specPlayer.boost, 550)}`}/>
      </SvgLoader>
    )
  )
}

export default SpecPlayer;