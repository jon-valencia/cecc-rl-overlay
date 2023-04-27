import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  control: {
    bestOfChoice: 5,
    team1Logo: "",
    team2Logo: "",
    team1SeriesScore: 0,
    team2SeriesScore: 0,
    sbElements: {
      sbSeriesTitle: "",
      sbGameInfo: "",
    },
    pgElements: {
      pgSeriesTitle: "",
      pgTitle: "",
      pgT1Name: "",
      pgT2Name: ""
    }
  }
}

export const payloadSlice = createSlice({
  name: 'payload',
  initialState,
  reducers: {
    handlePayload: (state, action) => {
      if (action.payload.type === 'control') {
        state.control.bestOfChoice = action.payload.data.bestOfChoice;
        if (action.payload.data.team1 !== '' && action.payload.data.team2 !== '') {
          state.control.team1Logo = `${action.payload.data.team1}.png`;
          state.control.team2Logo = `${action.payload.data.team2}.png`;
        }
        state.control.team1SeriesScore = action.payload.data.team1SeriesScore;
        state.control.team2SeriesScore = action.payload.data.team2SeriesScore;
        state.control.sbElements.sbSeriesTitle = action.payload.data.sbSeriesTitle;
        state.control.sbElements.sbGameInfo = action.payload.data.sbGameInfo;
        state.control.pgElements.pgSeriesTitle = action.payload.data.pgSeriesTitle;
        state.control.pgElements.pgTitle = action.payload.data.pgTitle;
        state.control.pgElements.pgT1Name = action.payload.data.pgT1Name;
        state.control.pgElements.pgT2Name = action.payload.data.pgT2Name;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { handlePayload } = payloadSlice.actions

export default payloadSlice.reducer