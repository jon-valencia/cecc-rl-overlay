import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import ReactPlayer from 'react-player';


function ReplayBug({ goal, gamestate, control }) {
  ReplayBug.propTypes = {
    goal:PropTypes.object,
    gamestate:PropTypes.object,
    control:PropTypes.object
  }

  if (control.team1Logo !== '' && control.team1Logo !== ''){
    var team1Logo = control.team1Logo;
    var team2Logo = control.team2Logo;
  } else {
    var team1Logo = '';
    var team2Logo = '';
  }

let border= 'assets/replaybug/border.webm';
  let theme = 'assets/replaybug/default.svg';

  return (
    <div>
      {/*<ReactPlayer url={border} muted={true} playing={true} loop={true} width="1920px" height="1080px" className="replayBorder"/>*/}
      <SvgLoader path={theme} className="replaybug">
        <SvgProxy selector="#replayBase" color={goal.scorer.teamnum === 0 ? `${gamestate.teamColors[0].primary}` : `${gamestate.teamColors[1].primary}`}/>
        <SvgProxy selector="#goalIcon" href="assets/icons/stat-icons/goal.svg"/>
        <SvgProxy selector="#assistIcon" href={goal.assister.name !== "" ? "assets/icons/stat-icons/assist.svg" : ""} />
        <SvgProxy selector="#scorerLogo" href={goal.scorer.teamnum === 0 ? team1Logo : team2Logo}/>
        <SvgProxy selector="#ballspeed">{`${goal.goalspeed}`}</SvgProxy>
        <SvgProxy selector="#rpTeamColor" stop-color={goal.scorer.teamnum === 0 ? `${gamestate.teamColors[0].primary}` : `${gamestate.teamColors[1].primary}`}/>
        <SvgProxy selector="#scorer">{`${goal.scorer.name.toUpperCase()}`}</SvgProxy>
        <SvgProxy selector="#assister">{goal.assister.name !== "" ? `${goal.assister.name.toUpperCase()}` : ""}</SvgProxy>
      </SvgLoader>
    </div>
  )
}

export default ReplayBug;