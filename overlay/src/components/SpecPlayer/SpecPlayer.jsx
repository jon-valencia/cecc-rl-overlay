import { SvgLoader, SvgProxy } from 'react-svgmt';

import secondsToMinutes from 'functions/secondsToMinutes';

const SpecPlayer = () => {
    
    let theme = 'assets/specplayer/default.svg';
    return (
        <SvgLoader path={theme}>
            <SvgProxy selector="#primaryColor"/>
            <SvgProxy selector="#secondaryColor" />
        </SvgLoader>
    )
}

export default SpecPlayer;