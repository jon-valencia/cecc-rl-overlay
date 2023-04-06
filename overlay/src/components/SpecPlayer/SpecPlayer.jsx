import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from 'functions/toPercent';

const SpecPlayer = ({ specPlayer, gamestate }) => {
    SpecPlayer.propTypes = {
        specPlayer:PropTypes.object,
        gamestate:PropTypes.object
    } 
    let theme = 'assets/specplayer/default.svg';
    return (
        gamestate && specPlayer &&
        (
            <SvgLoader path={theme}>
                <SvgProxy selector="#primaryColor" stop-color={specPlayer.team ? gamestate.teamColors[1].primary : gamestate.teamColors[0].primary}/>
                <SvgProxy selector="#secondaryColor" stop-color={specPlayer.team ? gamestate.teamColors[1].secondary : gamestate.teamColor[0].secondary}/>
                <SvgProxy selector="#specName">{`${specPlayer.player}`}</SvgProxy>
                <SvgProxy selector="#specScore">{`${specPlayer.score}`}</SvgProxy>
                <SvgProxy selector="#specGoals">{`${specPlayer.goals}`}</SvgProxy>
                <SvgProxy selector="#specAssists">{`${specPlayer.assists}`}</SvgProxy>
                <SvgProxy selector="#specSaves">{`${specPlayer.saves}`}</SvgProxy>
                <SvgProxy selector="#specBoost" width={`${toPercent(specPlayer.boost, 450)}`}/>
            </SvgLoader>
        )
    )
}

export default SpecPlayer;