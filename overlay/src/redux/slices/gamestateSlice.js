import { createSlice } from '@reduxjs/toolkit';

import isEmpty from 'functions/isEmpty';

const initialState = {
    inProgress: false,
    matchID: 0,
    playersLoaded: false,
    specPlayer: "",
    hasTarget: false,
    teamColors: [
        {
            primary: "",
            secondary: ""
        },
        {
            primary: "",
            secondary: ""
        }
    ]
}

export const gamestateSlice = createSlice({
  name: 'gamestate',
  initialState,
  reducers: {
    handleGamestate: (state, action) => {
      state.inProgress = action.payload.hasGame;
      state.matchID = action.payload.match_guid;
      state.playersLoaded = !isEmpty(action.payload.players);
      state.specPlayer = action.payload.game.target;
      state.hasTarget = action.payload.game.hasTarget;
      state.teamColors[0].primary = `#${action.payload.game.teams[0].color_primary}`;
      state.teamColors[0].secondary = `#${action.payload.game.teams[0].color_secondary}`;
      state.teamColors[1].primary = `#${action.payload.game.teams[1].color_primary}`;
      state.teamColors[1].secondary = `#${action.payload.game.teams[1].color_secondary}`;
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleGamestate } = gamestateSlice.actions

export default gamestateSlice.reducer