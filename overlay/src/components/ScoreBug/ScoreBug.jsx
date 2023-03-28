import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from '../../functions/secondsToMinutes';

const ScoreBug = (props) => {
    const { game } = props;
    let theme = 'assets/scorebug/default.svg';
    return (
        <SvgLoader path={theme}>
            <SvgProxy selector="#Clock">{secondsToMinutes(game.time_seconds)}</SvgProxy>
            <SvgProxy selector="#BlueName">{`${game.teams[0].name}`}</SvgProxy>
            <SvgProxy selector="#OrangeName">{game.teams[1].name}</SvgProxy>
            <SvgProxy selector="#BlueScore">{`${game.teams[0].score}`}</SvgProxy>
            <SvgProxy selector="#OrangeScore">{game.teams[1].score}</SvgProxy>
        </SvgLoader>
    )
}

export default ScoreBug;