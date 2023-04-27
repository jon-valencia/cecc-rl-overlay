import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';


function ReplayBug({ goal, gamestate }) {
  ReplayBug.propTypes = {
    goal:PropTypes.object,
    gamestate:PropTypes.object
  }

  let theme = 'assets/replaybug/default.svg';

  return (
    <SvgLoader path={theme}>
      <SvgProxy selector="#goalIcon" href="assets/icons/stat-icons/goal.svg"/>
      <SvgProxy selector="#assistIcon" href={goal.assister.name !== "" ? "assets/icons/stat-icons/assist.svg" : ""} />
      <SvgProxy selector="#mcdsLogo" href="assets/replaybug/mcds.png"/>
      <SvgProxy selector="#ballspeed">{`${goal.goalspeed}`}</SvgProxy>
      <SvgProxy selector="#rpTeamColor" stop-color={goal.scorer.teamnum === 0 ? `${gamestate.teamColors[0].primary}` : `${gamestate.teamColors[1].primary}`}/>
      <SvgProxy selector="#scorer">{`${goal.scorer.name.toUpperCase()}`}</SvgProxy>
      <SvgProxy selector="#assister">{goal.assister.name !== "" ? `${goal.assister.name.toUpperCase()}` : ""}</SvgProxy>
    </SvgLoader>
  )
}

export default ReplayBug;