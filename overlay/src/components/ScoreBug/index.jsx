import { useContext, useEffect, useState } from 'react';

import ScoreBug from './ScoreBug';

import './scorebug.css';

function ScoreBugApp() {
  return (
    <div className="scorebug">
      <ScoreBug/>
    </div>
  );
}

export default ScoreBugApp;