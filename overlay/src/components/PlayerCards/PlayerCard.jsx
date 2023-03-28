import PropTypes from 'prop-types';

import toPercent from '../../functions/toPercent';

const PlayerCard = (props) => {
    const { player } = props;
    return (
        <div className={player.team ? `card-orange ${player.id}` : `card-blue ${player.id}`}>
            <svg xmlns="http://www.w3.org/2000/svg">
                <rect height="70" width="300" stroke="black" fill="transparent" rx="5"></rect>
                <text textAnchor={player.team ? `end` : `start` } x={player.team ? `290` : `10` } y="25">{player.name}</text>
                <text textAnchor={player.team ? `start` : `end` } x={player.team ? `10` : `290` } y="25">{player.boost}</text>
                <rect x="10" y="55" height="10" width="280" stroke="black" fill="transparent" rx="2"></rect>
                <rect x="10" y="55" height="10" width={toPercent(`${player.boost}`, 280)} rx="2"></rect>
            </svg>
        </div>
    )
}

export default PlayerCard;