import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const ScoreBug = ({ gameinfo, gamestate, sbElements }) => {
    ScoreBug.propTypes = {
        gameinfo:PropTypes.object,
        gamestate:PropTypes.object,
        sbText:PropTypes.object
    }
    let team1Logo = 'default.png';
    let team2Logo = 'default.png'

    let clock = secondsToMinutes(gameinfo.time_seconds, gameinfo.isOT);
    if(sbElements.team1Logo !== '' && sbElements.team1Logo !== ''){
        team1Logo = sbElements.team1Logo;
        team2Logo = sbElements.team2Logo;
    }
    let theme = 'assets/scorebug/default2.svg';
    return (
       gameinfo &&
        (
            <SvgLoader path={theme}>
                <SvgProxy selector="#seriesTitle">{`${sbElements.seriesTitle}`}</SvgProxy>
                <SvgProxy selector="#gameInfo">{`${sbElements.gameInfo}`}</SvgProxy>
                <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
                <SvgProxy selector="#team1Name">{`${gameinfo.teams[0].name}`}</SvgProxy>
                <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
                <SvgProxy selector="#team2Name">{`${gameinfo.teams[1].name}`}</SvgProxy>
                <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
                <SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
                <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>
            </SvgLoader>
        )
    );
}

export default ScoreBug;