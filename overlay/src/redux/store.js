import { configureStore } from '@reduxjs/toolkit';
import gameinfoReducer from './slices/gameinfoSlice';
import playerReducer from './slices/playerSlice';
import gamestateReducer from './slices/gamestateSlice';
import specPlayerReducer from './slices/specPlayerSlice';
import payloadReducer from './slices/payloadSlice';
import goalScoredReducer from './slices/goalScoredSlice'

export default configureStore({
  reducer: {
    gameinfo: gameinfoReducer,
    players: playerReducer,
    gamestate: gamestateReducer,
    specPlayer: specPlayerReducer,
    payload: payloadReducer,
    goal: goalScoredReducer,
  }
})