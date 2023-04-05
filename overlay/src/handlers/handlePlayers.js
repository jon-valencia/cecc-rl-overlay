const handlePlayers = (update) => {
    return { ...update.data.players && { ...update.data.players }};
}

export default handlePlayers;