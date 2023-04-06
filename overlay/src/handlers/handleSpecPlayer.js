const handleSpecPlayer = (update) => {
    let target = update.data.game.target;
    
    if(target === "") return { 
        player: "",
        team: 0,
        score: 0,
        goals: 0,
        saves: 0,
        assists: 0,
        boost: 0
    };
   else return { 
        player: update.data.players[target].name,
        team: update.data.players[target].team,
        score: update.data.players[target].score,
        goals: update.data.players[target].goals,
        saves: update.data.players[target].saves,
        assists: update.data.players[target].assists,
        boost: update.data.players[target].boost 
    };
}

export default handleSpecPlayer;