import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from 'functions/toPercent';

const PlayerCard = ({ player }) => {
    PlayerCard.propTypes = {
        player:PropTypes.object
    }
    let theme = 'assets/playercard/default.svg';
    return (
        <SvgLoader path={theme}>
            <SvgProxy selector="#playerName">{`${player.name}`}</SvgProxy>
            <SvgProxy selector="#playerBoost">{`${player.boost}`}</SvgProxy>
            <SvgProxy selector="#boostBar" width={`${toPercent(player.boost, 320)}`}/>
        </SvgLoader>
    )
}

export default PlayerCard;