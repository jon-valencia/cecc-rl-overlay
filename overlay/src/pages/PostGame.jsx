import { SvgLoader, SvgProxy } from 'react-svgmt';
import { useSelector } from 'react-redux';

import isEmpty from 'functions/isEmpty';

function PostGame() {
  const gameinfo = useSelector((state) => state.gameinfo);
  const gamestate = useSelector((state) => state.gamestate);
  const players = useSelector((state) => state.players.players);
  const control = useSelector((state) => state.payload.control);

  let theme = 'assets/postgame/default.svg';
  let team1Logo = 'assets/logos/default.png';
  let team2Logo ='assets/logos/default.png';
  let team1 = [];
  let team2 = [];

  if(control.team1Logo !== '' && control.team1Logo !== ''){
    team1Logo = control.team1Logo;
    team2Logo = control.team2Logo;
}

  if (!isEmpty(players) && !isEmpty(gameinfo.teams[0]) && !isEmpty(gameinfo.teams[1])) {
    Object.keys(players).forEach((id) => {
      players[id].team === 0 && team1.push(id);
      players[id].team === 1 && team2.push(id);
    });
    return (
      players && (
        <SvgLoader path={theme}>
          <SvgProxy selector="#halfPennant" href="assets/postgame/half_pennant.png"/>
          <SvgProxy selector="#pgSeriesTitle">{`${control.pgElements.pgSeriesTitle}`}</SvgProxy>
          <SvgProxy selector="#pgTitle">{`${control.pgElements.pgTitle}`}</SvgProxy>
          <SvgProxy selector="#pgT1Name">{`${control.pgElements.pgT1Name}`}</SvgProxy>
          <SvgProxy selector="#pgT2Name">{`${control.pgElements.pgT2Name}`}</SvgProxy>
          <SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
          <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>
          <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
          <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
          <SvgProxy selector="#team1Grad" stop-color={gamestate.teamColors[0].primary}/>
          <SvgProxy selector="#team2Grad" stop-color={gamestate.teamColors[1].primary}/>
          <SvgProxy selector="#GRADIENT-2" fill={gamestate.teamColors[0].primary}/>
          <SvgProxy selector="#GRADIENT-4" fill={gamestate.teamColors[1].primary}/>
          <SvgProxy selector="#team1P1Name">{`${players[team1[0]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team1P1Score">{`${players[team1[0]].score}`}</SvgProxy>
          <SvgProxy selector="#team1P1Goals">{`${players[team1[0]].goals}`}</SvgProxy>
          <SvgProxy selector="#team1P1Assists">{`${players[team1[0]].assists}`}</SvgProxy>
          <SvgProxy selector="#team1P1Shots">{`${players[team1[0]].shots}`}</SvgProxy>
          <SvgProxy selector="#team1P1Saves">{`${players[team1[0]].saves}`}</SvgProxy>
          <SvgProxy selector="#team1P1Demos">{`${players[team1[0]].demos}`}</SvgProxy>
          <SvgProxy selector="#team1P2Name">{`${players[team1[1]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team1P2Score">{`${players[team1[1]].score}`}</SvgProxy>
          <SvgProxy selector="#team1P2Goals">{`${players[team1[1]].goals}`}</SvgProxy>
          <SvgProxy selector="#team1P2Assists">{`${players[team1[1]].assists}`}</SvgProxy>
          <SvgProxy selector="#team1P2Shots">{`${players[team1[1]].shots}`}</SvgProxy>
          <SvgProxy selector="#team1P2Saves">{`${players[team1[1]].saves}`}</SvgProxy>
          <SvgProxy selector="#team1P2Demos">{`${players[team1[1]].demos}`}</SvgProxy>
          <SvgProxy selector="#team1P3Name">{`${players[team1[2]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team1P3Score">{`${players[team1[2]].score}`}</SvgProxy>
          <SvgProxy selector="#team1P3Goals">{`${players[team1[2]].goals}`}</SvgProxy>
          <SvgProxy selector="#team1P3Assists">{`${players[team1[2]].assists}`}</SvgProxy>
          <SvgProxy selector="#team1P3Shots">{`${players[team1[2]].shots}`}</SvgProxy>
          <SvgProxy selector="#team1P3Saves">{`${players[team1[2]].saves}`}</SvgProxy>
          <SvgProxy selector="#team1P3Demos">{`${players[team1[2]].demos}`}</SvgProxy>
          <SvgProxy selector="#team2P1Name">{`${players[team2[0]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team2P1Score">{`${players[team2[0]].score}`}</SvgProxy>
          <SvgProxy selector="#team2P1Goals">{`${players[team2[0]].goals}`}</SvgProxy>
          <SvgProxy selector="#team2P1Assists">{`${players[team2[0]].assists}`}</SvgProxy>
          <SvgProxy selector="#team2P1Shots">{`${players[team2[0]].shots}`}</SvgProxy>
          <SvgProxy selector="#team2P1Saves">{`${players[team2[0]].saves}`}</SvgProxy>
          <SvgProxy selector="#team2P1Demos">{`${players[team2[0]].demos}`}</SvgProxy>
          <SvgProxy selector="#team2P2Name">{`${players[team2[1]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team2P2Score">{`${players[team2[1]].score}`}</SvgProxy>
          <SvgProxy selector="#team2P2Goals">{`${players[team2[1]].goals}`}</SvgProxy>
          <SvgProxy selector="#team2P2Assists">{`${players[team2[1]].assists}`}</SvgProxy>
          <SvgProxy selector="#team2P2Shots">{`${players[team2[1]].shots}`}</SvgProxy>
          <SvgProxy selector="#team2P2Saves">{`${players[team2[1]].saves}`}</SvgProxy>
          <SvgProxy selector="#team2P2Demos">{`${players[team2[1]].demos}`}</SvgProxy>
          <SvgProxy selector="#team2P3Name">{`${players[team2[2]].name.toUpperCase()}`}</SvgProxy>
          <SvgProxy selector="#team2P3Score">{`${players[team2[2]].score}`}</SvgProxy>
          <SvgProxy selector="#team2P3Goals">{`${players[team2[2]].goals}`}</SvgProxy>
          <SvgProxy selector="#team2P3Assists">{`${players[team2[2]].assists}`}</SvgProxy>
          <SvgProxy selector="#team2P3Shots">{`${players[team2[2]].shots}`}</SvgProxy>
          <SvgProxy selector="#team2P3Saves">{`${players[team2[2]].saves}`}</SvgProxy>
          <SvgProxy selector="#team2P3Demos">{`${players[team2[2]].demos}`}</SvgProxy>
        </SvgLoader>
      )
    )
  } else {
    return (
      <SvgLoader path={theme}>
        <SvgProxy selector="#halfPennant" href="assets/postgame/half_pennant.png"/>
        <SvgProxy selector="#team1Logo" href="assets/logos/default.png"/>
        <SvgProxy selector="#team2Logo" href="assets/logos/default.png"/>
      </SvgLoader>
    )
  }
}

export default PostGame;