import { SocketContext } from 'contexts/SocketContexts';
import { useContext, useEffect, useState } from 'react';

import isEmpty from 'functions/isEmpty';
/*
const HandleGame = (props) => {
    const [gamestate, setGamestate] = useContext(SocketContext);

    const [game, setGame] = useState();

    useEffect(() => {
        if(!isEmpty(game)) {
            setGamestate({
                ...gamestate,
                game: {}
            })
        }
    })
}*/