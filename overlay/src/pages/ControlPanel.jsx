import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import SocketContext from 'contexts/SocketContext';

import './controlpanel.css';


function ControlPanel() {
    const socket = useContext(SocketContext);
    
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      //fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson)
      socket.emit('payload', {
        type: 'control',
        data: { ...formJson }
      })
    }
    
    return (
      <Grid className="controlpanel-form"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <form method="post" onSubmit={handleSubmit}>
          <h1>CECC ROCKET LEAGUE OVERLAY</h1>
          <hr/>
          <div className="series-information">
            <h2>Series Info</h2>
            <div>
              Best Of:
              <label><input type="radio" name="bestOfChoice" value={5} defaultChecked={true} /> 5</label>
              <label><input type="radio" name="bestOfChoice" value={7} /> 7</label>
            </div>
            <br/>
            <div>
              Team 1 Series Score:
              <label><input type="radio" name="team1SeriesScore" value={0} defaultChecked={true}/>0</label>
              <label><input type="radio" name="team1SeriesScore" value={1}/>1</label>
              <label><input type="radio" name="team1SeriesScore" value={2}/>2</label>
              <label><input type="radio" name="team1SeriesScore" value={3}/>3</label>
              <label><input type="radio" name="team1SeriesScore" value={4}/>4</label>
            </div>
            <div>
              Team 2 Series Score:
              <label><input type="radio" name="team2SeriesScore" value={0} defaultChecked={true}/>0</label>
              <label><input type="radio" name="team2SeriesScore" value={1}/>1</label>
              <label><input type="radio" name="team2SeriesScore" value={2}/>2</label>
              <label><input type="radio" name="team2SeriesScore" value={3}/>3</label>
              <label><input type="radio" name="team2SeriesScore" value={4}/>4</label>
            </div>
            <br/>
            <div>
              TEAMS:
              <select name="team1">
                <option value="brewton">Brewton-Parker</option>
                <option value="stockton">Stockton</option>
                <option value="gcu">Grand Canyon</option>
                <option value="northwood">Northwood</option>
                <option value="fisher">Fisher</option>
                <option value="columbia">Columbia</option>
                <option value="staten">Staten Island</option>
                <option value="akron">Akron</option>
                <option value="union">Mount Union</option>
                <option value="boise">Boise State</option>
                <option value="uta">UT Arlington</option>
                <option value="george">George Mason</option>
                <option value="weber">Weber State</option>
                <option value="iona">Iona</option>
                <option value="indian">Indian River State</option>
                <option value="wvu">West Virgina</option>
              </select>
              <select name="team2">
                <option value="brewton">Brewton-Parker</option>
                <option value="stockton">Stockton</option>
                <option value="gcu">Grand Canyon</option>
                <option value="northwood">Northwood</option>
                <option value="fisher">Fisher</option>
                <option value="columbia">Columbia</option>
                <option value="staten">Staten Island</option>
                <option value="akron">Akron</option>
                <option value="union">Mount Union</option>
                <option value="boise">Boise State</option>
                <option value="uta">UT Arlington</option>
                <option value="george">George Mason</option>
                <option value="weber">Weber State</option>
                <option value="iona">Iona</option>
                <option value="indian">Indian River State</option>
                <option value="wvu">West Virgina</option>
              </select>
            </div>
            <br/>
          </div>
          <hr/>
          <div className="scorebug-info">
            <h2>Scorebug Text</h2>
            <label htmlFor="seriesTitle">Series Title:</label><br/>
            <input type="text" name="sbSeriesTitle"/><br/>
            <label htmlFor="gameInfo">Game Info:</label><br/>
            <input type="text" name="sbGameInfo"/><br/><br/>
          </div>
          <hr/>
          <div className="postgame-info">
            <h2>Postgame Scoreboard Text</h2>
            <label htmlFor="pgSeriesTitle">Series Title:</label><br/>
            <input type="text" name="pgSeriesTitle"/><br/>
            <label htmlFor="pgTitle">Postgame Title:</label><br/>
            <input type="text" name="pgTitle"/><br/>
            <label htmlFor="pgT1Name">Team 1 Name:</label><br/>
            <input type="text" name="pgT1Name"/><br/>
            <label htmlFor="pgT2Name">Team 2 Name:</label><br/>
            <input type="text" name="pgT2Name"/><br/><br/>
          </div>
          <hr />
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>
      </Grid>
    )
};

export default ControlPanel;