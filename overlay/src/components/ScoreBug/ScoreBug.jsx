import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const ScoreBug = ({ game, gamestate }) => {
    ScoreBug.propTypes = {
        game:PropTypes.object,
        gamestate:PropTypes.object
    }

    let clock = secondsToMinutes(game.time_seconds, game.isOT);
    let theme = 'assets/scorebug/default.svg';
    return (
        game &&
        (
            <SvgLoader path={theme}>
                <SvgProxy selector="#primaryColor1" stop-color={gamestate.teamColors[0].primary}/>
                <SvgProxy selector="#secondaryColor1"stop-color={gamestate.teamColors[0].secondary}/>
                <SvgProxy selector="#primaryColor2" stop-color={gamestate.teamColors[1].primary}/>
                <SvgProxy selector="#secondaryColor2"stop-color={gamestate.teamColors[1].secondary}/>
                <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
                <SvgProxy selector="#team1Name">{`${game.teams[0].name}`}</SvgProxy>
                <SvgProxy selector="#team1Score">{`${game.teams[0].score}`}</SvgProxy>
                <SvgProxy selector="#team2Name">{`${game.teams[1].name}`}</SvgProxy>
                <SvgProxy selector="#team2Score">{`${game.teams[1].score}`}</SvgProxy>
            </SvgLoader>
        )
    );
}

export default ScoreBug;