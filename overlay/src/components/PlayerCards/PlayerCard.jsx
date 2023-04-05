import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import toPercent from '../../functions/toPercent';

const PlayerCard = (props) => {
    const { player } = props;
    let theme = 'assets/playercard/default.svg';
    return (
        <SvgLoader path={theme}>
            
        </SvgLoader>
    )
}

export default PlayerCard;