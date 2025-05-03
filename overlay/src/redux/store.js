import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import gameinfoReducer from './slices/gameinfoSlice';
import playerReducer from './slices/playerSlice';
import gamestateReducer from './slices/gamestateSlice';
import specPlayerReducer from './slices/specPlayerSlice';
import payloadReducer from './slices/payloadSlice';
import goalScoredReducer from './slices/goalScoredSlice'

const rootReducer = combineReducers({
  gameinfo: gameinfoReducer,
  players: playerReducer,
  gamestate: gamestateReducer,
  specPlayer: specPlayerReducer,
  payload: payloadReducer,
  goal: goalScoredReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

/*export default configureStore({
  reducer: {
    gameinfo: gameinfoReducer,
    players: playerReducer,
    gamestate: gamestateReducer,
    specPlayer: specPlayerReducer,
    payload: payloadReducer,
    goal: goalScoredReducer,
  }
})*/