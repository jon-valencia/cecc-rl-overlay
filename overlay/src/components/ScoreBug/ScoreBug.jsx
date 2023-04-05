import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const ScoreBug = () => {
    
    let theme = 'assets/scorebug/default.svg';
    return (
        <SvgLoader path={theme}>
            <SvgProxy selector="#primaryColor1"/>
            <SvgProxy selector="#secondaryColor1"/>
            <SvgProxy selector="#primaryColor2"/>
            <SvgProxy selector="#secondaryColor2"/>
            <SvgProxy selector="#clock"></SvgProxy>
            <SvgProxy selector="#team1Name"></SvgProxy>
            <SvgProxy selector="#team1Score"></SvgProxy>
            <SvgProxy selector="#team2Name"></SvgProxy>
            <SvgProxy selector="#team2Score"></SvgProxy>
        </SvgLoader>
    )
}

export default ScoreBug;