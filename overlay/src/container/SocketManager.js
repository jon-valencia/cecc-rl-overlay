import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { handleGameinfo } from 'redux/slices/gameinfoSlice';
import { handlePlayers } from 'redux/slices/playerSlice';
import { handleGamestate } from 'redux/slices/gamestateSlice';
import { handleSpecPlayer } from 'redux/slices/specPlayerSlice';
import { handlePayload } from 'redux/slices/payloadSlice';
import { handleGoalScored } from 'redux/slices/goalScoredSlice';

import SocketContext from 'contexts/SocketContext';

import isEmpty from 'functions/isEmpty';

const SocketManager = () => {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('payload', (payload) => {
          dispatch(handlePayload(payload));
          console.log(payload);
        })
        socket.on('update', (update) => {
          if (update.event === 'game:update_state') {
            dispatch(handleGameinfo(update.data.game));
            dispatch(handleGamestate(update.data));
            if(!isEmpty(update.data.players)) {
              dispatch(handlePlayers(update.data.players));
              dispatch(handleSpecPlayer(update.data));
            }
          }
          update.event === 'game:goal_scored' && dispatch(handleGoalScored(update.data));
        })
    },[])
}

export default SocketManager;