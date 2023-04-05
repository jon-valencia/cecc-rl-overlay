import { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContexts';

import SpecPlayer from './SpecPlayer';
import './specplayer.css';

function SpecPlayerApp() {
  const [state] = useContext(SocketContext);
  return (
    <div className="specplayer">
      <SpecPlayer/>
    </div>
  );
}

export default SpecPlayerApp;