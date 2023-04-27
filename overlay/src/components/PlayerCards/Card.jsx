import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from 'functions/toPercent';

const Card = ({ player, gamestate }) => {
    Card.propTypes = {
        player:PropTypes.object,
        gamestate:PropTypes.object
    }
    let theme = 'assets/playercard/default.svg';
    return (
        player && 
        (
          <div className={player.team ? `team2-card ${player.id}`: `team1-card ${player.id}`}>
            <SvgLoader path={theme}>
              <SvgProxy selector="#playercard" fill={player.id === gamestate.specPlayer ? gamestate.teamColors[player.team].primary : "black"}/>
              <SvgProxy selector="#playerName" text-anchor={player.team ? `start` : `end`} x={player.team ? "10" : "310"} fill={player.id === gamestate.specPlayer ? "black" : "white"}>{`${player.name.toUpperCase()}`}</SvgProxy>
              <SvgProxy selector="#playerBoost" text-anchor={player.team ? `end` : `start`} x={player.team ? "310" : "10"} fill={player.id === gamestate.specPlayer ? "black" : "white"}>{`${player.boost}`}</SvgProxy>
              <SvgProxy selector="#boostBar" width={`${toPercent(player.boost, 320)}`} fill={player.team ? gamestate.teamColors[1].primary : gamestate.teamColors[0].primary}/>
              <SvgProxy selector="#boostBar" width={`${toPercent(player.boost, 320)}`} fill={player.id === gamestate.specPlayer ? "white" : gamestate.teamColors[player.team].primary}/>       
            </SvgLoader>
          </div>
        )
    );
};

export default Card;