import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const ScoreBug = ({ game }) => {
    ScoreBug.propTypes = {
        game:PropTypes.object
    }

    let clock = secondsToMinutes(game.time_seconds);
    let theme = 'assets/scorebug/default.svg';
    return (
        game &&
        (
        <SvgLoader path={theme}>
            <SvgProxy selector="#primaryColor1"/>
            <SvgProxy selector="#secondaryColor1"/>
            <SvgProxy selector="#primaryColor2"/>
            <SvgProxy selector="#secondaryColor2"/>
            <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
            <SvgProxy selector="#team1Name">{`${game.teams[0].name}`}</SvgProxy>
            <SvgProxy selector="#team1Score">{`${game.teams[0].score}`}</SvgProxy>
            <SvgProxy selector="#team2Name">{`${game.teams[1].name}`}</SvgProxy>
            <SvgProxy selector="#team2Score">{`${game.teams[1].score}`}</SvgProxy>
        </SvgLoader>
        )
    )
}

export default ScoreBug;