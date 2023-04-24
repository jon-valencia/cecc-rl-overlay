import { useContext, useState } from 'react';
import SocketContext from 'contexts/sc'

function ControlPanel() {
    const socket = useContext(SocketContext);
    const [bestOf, setBestOf] = useState(5);

    /*useEffect(() => {
      //console.log(sbText);
      socket.emit('payload', {
        ...sbText
      })
    },[sbText]);*/
    
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
      socket.emit('payload', {
        type: 'control',
        data: { ...formJson }
      })
    }
    
    return (
      <form method="post" onSubmit={handleSubmit}>
          <label>
            Series Title: <input name="seriesTitle" />
          </label>
          <label>
            Game info: <input name="gameInfo" />
          </label>
          <hr />
          <p>
            Best Of:
            <label><input type="radio" name="bestOfChoice" value={5} defaultChecked={true} /> 5</label>
            <label><input type="radio" name="bestOfChoice" value={7} /> 7</label>
          </p>
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
          <p>
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
          </p>
          <hr />
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>
    )
};

export default ControlPanel;