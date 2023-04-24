import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from 'functions/toPercent';

const SpecPlayer = ({ specPlayer, gamestate }) => {
    SpecPlayer.propTypes = {
        specPlayer:PropTypes.object,
        gamestate:PropTypes.object
    } 
    let team1PC = gamestate.teamColors[0].primary;
    let team2PC = gamestate.teamColors[1].primary;
    let theme = 'assets/specplayer/default.svg';
    return (
        gamestate && specPlayer &&
        (
            <SvgLoader path={theme}>
                <SvgProxy selector="#primaryColor" stop-color={specPlayer.team ? team2PC : team1PC}/>
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