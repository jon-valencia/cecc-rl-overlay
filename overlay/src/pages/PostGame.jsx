import { SvgLoader, SvgProxy } from 'react-svgmt';
import { useSelector } from 'react-redux';

import isEmpty from 'functions/isEmpty';

function PostGame() {
  const gameinfo = useSelector((state) => state.gameinfo);
  const gamestate = useSelector((state) => state.gamestate);
  const players = useSelector((state) => state.players.players);
  const control = useSelector((state) => state.payload.control);

  let theme = 'assets/postgame/default.svg';
  //let team1Logo = 'assets/logos/default.png';
  //let team2Logo ='assets/logos/default.png';
  let team1 = [];
  let team2 = [];

  /*if (control.team1Logo !== '' && control.team2Logo !== ''){
    team1Logo = control.team1Logo;
    team2Logo = control.team2Logo;
  }*/
  if (!isEmpty(players)) {
    Object.keys(players).forEach((id) => {
      players[id].team === 0 && team1.push(id);
      players[id].team === 1 && team2.push(id);
    });
  }

  if (!isEmpty(gameinfo.teams[0]) && !isEmpty(gameinfo.teams[1])) {
    return (
      players && (
        <SvgLoader path={theme}>
          <SvgProxy selector="#halfPennant" href="assets/postgame/half_pennant.png"/>
          <SvgProxy selector="#pgSeriesTitle">{`${control.pgElements.pgSeriesTitle}`}</SvgProxy>
          <SvgProxy selector="#pgTitle">{`${control.pgElements.pgTitle}`}</SvgProxy>
          <SvgProxy selector="#pgT1Name">{`${control.pgElements.pgT1Name}`}</SvgProxy>
          <SvgProxy selector="#pgT2Name">{`${control.pgElements.pgT2Name}`}</SvgProxy>
          {/*<SvgProxy selector="#team1Logo" href={`assets/logos/${team1Logo}`}/>
          <SvgProxy selector="#team2Logo" href={`assets/logos/${team2Logo}`}/>*/}
          <SvgProxy selector="#team1Score">{`${gameinfo.teams[0].score}`}</SvgProxy>
          <SvgProxy selector="#team2Score">{`${gameinfo.teams[1].score}`}</SvgProxy>
          <SvgProxy selector="#team1Grad" stop-color={gamestate.teamColors[0].primary}/>
          <SvgProxy selector="#team2Grad" stop-color={gamestate.teamColors[1].primary}/>
          <SvgProxy selector="#GRADIENT-2" fill={gamestate.teamColors[0].primary}/>
          <SvgProxy selector="#GRADIENT-4" fill={gamestate.teamColors[1].primary}/>
          <SvgProxy selector="#team1P1Name">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Score">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Goals">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Assists">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Shots">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Saves">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P1Demos">{!isEmpty(players[team1[0]]) ? `${players[team1[0]].demos}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Name">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Score">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Goals">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Assists">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Shots">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Saves">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P2Demos">{!isEmpty(players[team1[1]]) ? `${players[team1[1]].demos}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Name">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Score">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Goals">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Assists">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Shots">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Saves">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team1P3Demos">{!isEmpty(players[team1[2]]) ? `${players[team1[2]].demos}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Name">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Score">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Goals">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Assists">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Shots">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Saves">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P1Demos">{!isEmpty(players[team2[0]]) ? `${players[team2[0]].demos}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Name">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Score">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Goals">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Assists">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Shots">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Saves">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P2Demos">{!isEmpty(players[team2[1]]) ? `${players[team2[1]].demos}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Name">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].name.toUpperCase()}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Score">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].score}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Goals">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].goals}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Assists">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].assists}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Shots">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].shots}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Saves">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].saves}` : ""}</SvgProxy>
          <SvgProxy selector="#team2P3Demos">{!isEmpty(players[team2[2]]) ? `${players[team2[2]].demos}` : ""}</SvgProxy>
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