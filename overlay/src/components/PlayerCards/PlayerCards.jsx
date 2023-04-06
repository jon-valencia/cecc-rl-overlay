import Card from './Card';

const PlayerCard = ({ players, gamestate }) => {
    const cards = {
        team1: Object.keys(players).map((id) => {
            return players[id].team === 0 && <Card key={id} player={players[id]} gamestate={gamestate}/>;
        }),
        team2: Object.keys(players).map((id) => {
            return players[id].team === 1 && <Card key={id} player={players[id]} gamestate={gamestate}/>;
        })
    }
    
    
    return (
        <div className="playercard-container">
            <div className="team1-container">{cards.team1}</div>
            <div className="team2-container">{cards.team2}</div>
        </div>
    )
}

export default PlayerCard;