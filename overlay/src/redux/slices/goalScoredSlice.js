import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assister: {},
  goalspeed: 0,
  scorer: {},
}

export const goalScoredSlice = createSlice({
  name: 'goalScored',
  initialState,
  reducers: {
    handleGoalScored: (state, action) => {
      state.assister = { ...action.payload.assister };
      state.goalspeed = Math.trunc(action.payload.goalspeed);
      state.scorer = { ...action.payload.scorer };
    }
  }
});

// Action creators are generated for each case reducer function
export const { handleGoalScored } = goalScoredSlice.actions

export default goalScoredSlice.reducer