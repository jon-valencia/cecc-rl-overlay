import isEmpty from 'functions/isEmpty';
import PropTypes from 'prop-types';

import PlayerCard from './PlayerCard';

const Card = ({ players }) => {
    Card.propTypes = {
        players:PropTypes.object
    }
    
    if(!isEmpty(players)) {
        return (
            Object.keys(players).map((id) => {
                return (
                <div className={players[id].team ? `team2-card ${players[id].id}` : `team1-card ${players[id].id}`}>
                    <PlayerCard player={players[id]}/>
                </div>
                )
            })
        )
    }
}

export default Card;