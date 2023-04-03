const handleGameState = (update) => {
    const info = {
        inProgress: update.data.hasGame,
        matchID: update.data.match_guid
    }

    return { ...info };
}