import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const ScoreBug = ({ gameinfo, gamestate, control }) => {
    ScoreBug.propTypes = {
        gameinfo:PropTypes.object,
        gamestate:PropTypes.object,
        control:PropTypes.object
    }
    let team1Logo = 'default.png';
    let team2Logo = 'default.png';
    let theme = `assets/scorebug/defaultBO${control.bestOfChoice}.svg`

    let clock = secondsToMinutes(gameinfo.time_seconds, gameinfo.isOT);
    if(control.team1Logo !== '' && control.team1Logo !== ''){
        team1Logo = control.team1Logo;
        team2Logo = control.team2Logo;
    }
    
    
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
          <SvgProxy selector="#seriesTitle">{`${control.sbElements.sbSeriesTitle}`}</SvgProxy>
          <SvgProxy selector="#gameInfo">{`${control.sbElements.sbGameInfo}`}</SvgProxy>
          <SvgProxy selector="#clock">{`${clock}`}</SvgProxy>
          <SvgProxy selector="#team1Name">{`${gameinfo.teams[0].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
          <SvgProxy selector="#team2Name">{`${gameinfo.teams[1].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
          <SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
          <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>
          <SvgProxy selector="#team1Bo5Box1" fill={control.team1SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo5Box2" fill={control.team1SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo5Box3" fill={control.team1SeriesScore > 2 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box1" fill={control.team2SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box2" fill={control.team2SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo5Box3" fill={control.team2SeriesScore > 2 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo7Box1" fill={control.team1SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo7Box2" fill={control.team1SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo7Box3" fill={control.team1SeriesScore > 2 ? "white" : ""}/>
          <SvgProxy selector="#team1Bo7Box4" fill={control.team1SeriesScore > 3 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo7Box1" fill={control.team2SeriesScore > 0 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo7Box2" fill={control.team2SeriesScore > 1 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo7Box3" fill={control.team2SeriesScore > 2 ? "white" : ""}/>
          <SvgProxy selector="#team2Bo7Box4" fill={control.team2SeriesScore > 3 ? "white" : ""}/>
        </SvgLoader>
      )
    );
}

export default ScoreBug;