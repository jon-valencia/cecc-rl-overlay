import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    player: "",
    team: 0,
    score: 0,
    goals: 0,
    assists: 0,
    saves: 0,
    boost: 0,
    shots: 0
}

export const specPlayerSlice = createSlice({
  name: 'specplayer',
  initialState,
  reducers: {
    handleSpecPlayer: (state, action) => {
      let target = action.payload.game.target;
      if (target !== "") {
        state.player = action.payload.players[target].name;
        state.team = action.payload.players[target].team;
        state.score = action.payload.players[target].score;
        state.goals = action.payload.players[target].goals;
        state.assists = action.payload.players[target].assists;
        state.saves = action.payload.players[target].saves;
        state.boost = action.payload.players[target].boost;
        state.shots = action.payload.players[target].shots;
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { handleSpecPlayer } = specPlayerSlice.actions

export default specPlayerSlice.reducer