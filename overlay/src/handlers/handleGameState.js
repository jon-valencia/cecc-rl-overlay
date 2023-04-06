import isEmpty from "functions/isEmpty";

const handleGameState = (update) => {
    if(!isEmpty(update.data.game) && !isEmpty(update.data.players)) {
    const info = {
        inProgress: update.data.hasGame,
        matchID: update.data.match_guid,
        playersLoaded: !isEmpty(update.data.players),
        specPlayer: update.data.game.target,
        hasTarget: update.data.game.hasTarget,
        teamColors: [
            {
                primary: `#${update.data.game.teams[0].color_primary}`,
                secondary: `#${update.data.game.teams[0].color_secondary}`
            },
            {
                primary: `#${update.data.game.teams[1].color_primary}`,
                secondary: `#${update.data.game.teams[1].color_secondary}`
            },
        ]
    }

    return { ...info }};
}

export default handleGameState;