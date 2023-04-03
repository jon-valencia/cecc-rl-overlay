const handleSpecPlayer = (update) => {
    let spec = {}
    if (update.data.game.hasTarget !== false) {
        let target = update.data.game.target;
        spec = {
            player: update.data.players[target].name,
            team: update.data.players[target].team,
            score: update.data.players[target].score,
            goals: update.data.players[target].goals,
            saves: update.data.players[target].saves,
            assists: update.data.players[target].assists
        }
    }
    return { ...spec }
}

export default handleSpecPlayer;