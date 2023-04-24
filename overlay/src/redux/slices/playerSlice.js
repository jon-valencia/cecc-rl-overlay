import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    players: {}
}

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    handlePlayers: (state, action) => {
      state.players = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { handlePlayers } = playerSlice.actions

export default playerSlice.reducer