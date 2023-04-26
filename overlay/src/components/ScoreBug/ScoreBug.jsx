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
    let team2Logo = 'default.png';
    let theme = '';

    let clock = secondsToMinutes(gameinfo.time_seconds, gameinfo.isOT);
    if(sbElements.team1Logo !== '' && sbElements.team1Logo !== ''){
        team1Logo = sbElements.team1Logo;
        team2Logo = sbElements.team2Logo;
    }
    
    if (sbElements.bestOfChoice === 5) {
      theme = 'assets/scorebug/defaultBO5.svg'
      return (
        gameinfo &&
        (
          <SvgLoader path={theme}>
            <SvgProxy selector="#team1GradStart" stop-color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team1GradEnd" stop-color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team1Bar" color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team2GradStart" stop-color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#team2GradEnd" stop-color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#team2Bar" color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#seriesTitle">{`${sbElements.seriesTitle}`}</SvgProxy>
            <SvgProxy selector="#gameInfo">{`${sbElements.gameInfo}`}</SvgProxy>
            <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
            <SvgProxy selector="#team1Name">{`${gameinfo.teams[0].name}`}</SvgProxy>
            <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
            <SvgProxy selector="#team2Name">{`${gameinfo.teams[1].name}`}</SvgProxy>
            <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
            <SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
            <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>
            <SvgProxy selector="#team1Bo5Box1" fill={sbElements.team1SeriesScore > 0 ? "white" : ""}/>
            <SvgProxy selector="#team1Bo5Box2" fill={sbElements.team1SeriesScore > 1 ? "white" : ""}/>
            <SvgProxy selector="#team1Bo5Box3" fill={sbElements.team1SeriesScore > 2 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo5Box1" fill={sbElements.team2SeriesScore > 0 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo5Box2" fill={sbElements.team2SeriesScore > 1 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo5Box3" fill={sbElements.team2SeriesScore > 2 ? "white" : ""}/>
          </SvgLoader>
        )
      );
    }
    if (sbElements.bestOfChoice === 7) {
      theme = 'assets/scorebug/defaultBO7.svg'
      return (
        gameinfo &&
        (
          <SvgLoader path={theme}>
            <SvgProxy selector="#team1GradStart" stop-color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team1GradEnd" stop-color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team1Bar" color={gamestate.teamColors[0].primary}/>
            <SvgProxy selector="#team2GradStart" stop-color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#team2GradEnd" stop-color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#team2Bar" color={gamestate.teamColors[1].primary}/>
            <SvgProxy selector="#seriesTitle">{`${sbElements.seriesTitle}`}</SvgProxy>
            <SvgProxy selector="#gameInfo">{`${sbElements.gameInfo}`}</SvgProxy>
            <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
            <SvgProxy selector="#team1Name">{`${gameinfo.teams[0].name}`}</SvgProxy>
            <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
            <SvgProxy selector="#team2Name">{`${gameinfo.teams[1].name}`}</SvgProxy>
            <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
            <SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
            <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>
            <SvgProxy selector="#team1Bo7Box1" fill={sbElements.team1SeriesScore > 0 ? "white" : ""}/>
            <SvgProxy selector="#team1Bo7Box2" fill={sbElements.team1SeriesScore > 1 ? "white" : ""}/>
            <SvgProxy selector="#team1Bo7Box3" fill={sbElements.team1SeriesScore > 2 ? "white" : ""}/>
            <SvgProxy selector="#team1Bo7Box4" fill={sbElements.team1SeriesScore > 3 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo7Box1" fill={sbElements.team2SeriesScore > 0 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo7Box2" fill={sbElements.team2SeriesScore > 1 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo7Box3" fill={sbElements.team2SeriesScore > 2 ? "white" : ""}/>
            <SvgProxy selector="#team2Bo7Box4" fill={sbElements.team2SeriesScore > 3 ? "white" : ""}/>
          </SvgLoader>
        )
      );
    }
}

export default ScoreBug;