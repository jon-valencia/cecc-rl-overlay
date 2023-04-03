const handleSpecPlayer = ({ game, players }) => {
    const spec = {}
    if (game.hasTarget !== false) {
        let target = game.data.target;
        spec = {
            player: players[target].name,
            team: players[target].team,
            score: players[target].score,
            goals: players[target].goals,
            saves: players[target].saves,
            assists: players[target].assists
        }
    }
    return { ...spec }
}