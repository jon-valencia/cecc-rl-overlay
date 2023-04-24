import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  control: {
    bestOfChoice: 0,
    team1SeriesScore: 0,
    team2SeriesScore: 0,
    gameInfo: "",
    seriesTitle: "",
    team1Logo: "",
    team2Logo: ""
  }
}

export const payloadSlice = createSlice({
  name: 'payload',
  initialState,
  reducers: {
    handlePayload: (state, action) => {
      if (action.payload.type === 'control') {
        state.control.bestOfChoice = action.payload.data.bestOfChoice;
        state.control.team1SeriesScore = action.payload.data.team1SeriesScore;
        state.control.team2SeriesScore = action.payload.data.team2SeriesScore;
        state.control.gameInfo = action.payload.data.gameInfo;
        state.control.seriesTitle = action.payload.data.seriesTitle;
        state.control.team1Logo = `${action.payload.data.team1}.png`;
        state.control.team2Logo = `${action.payload.data.team2}.png`;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { handlePayload } = payloadSlice.actions

export default payloadSlice.reducer