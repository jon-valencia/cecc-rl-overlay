import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arena: "",
  ball: {},
  hasTarget: false,
  hasWinner: false,
  isOT: false,
  isReplay: false,
  target: "",
  teams: [],
  time_seconds: 0,
  winner: ""
}

export const gameinfoSlice = createSlice({
  name: 'gameinfo',
  initialState,
  reducers: {
    handleGameinfo: (state, action) => {
      state.arena = action.payload.arena;
      state.ball = { ...action.payload.ball };
      state.hasTarget = action.payload.hasTarget;
      state.hasWinner = action.payload.hasWinner;
      state.isOT = action.payload.isOT;
      state.isReplay = action.payload.isReplay;
      state.target = action.payload.target;
      state.teams = action.payload.teams;
      state.time_seconds = action.payload.time_seconds;
      state.winner = action.payload.winner;
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleGameinfo } = gameinfoSlice.actions

export default gameinfoSlice.reducer