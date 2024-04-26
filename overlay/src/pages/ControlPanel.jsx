import { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import SocketContext from 'contexts/SocketContext';

import './controlpanel.css';


function ControlPanel() {
    const socket = useContext(SocketContext);
    const [seriesLogo, setSeriesLogo] = useState('');
    const [team1Logo, setTeam1Logo] = useState('');
    const [team2Logo, setTeam2Logo] = useState('');
    const [team1Banner, setTeam1Banner] = useState('');
    const [team2Banner, setTeam2Banner] = useState('');
    function seriesLogoToB64(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        console.log(reader.result)
        setSeriesLogo(reader.result);
      }
    }
    function t1LogoToB64(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        console.log(reader.result)
        setTeam1Logo(reader.result);
      }
    }
    function t2LogoToB64(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        console.log(reader.result)
        setTeam2Logo(reader.result);
      }
    }
    function t1BannerToB64(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        console.log(reader.result)
        setTeam1Banner(reader.result);
      }
    }
    function t2BannerToB64(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        console.log(reader.result)
        setTeam2Banner(reader.result);
      }
    }
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
      // Read the form data
      //console.log(e.target.team1Logo.files[0])
      //console.log(handleImage(e.target.team1Logo.files[0]))
      //handleImage(e.target.team2Logo.files[0])
      const form = e.target;
      const formData = new FormData(form);
      //console.log(formData.entries())
  
      // You can pass formData as a fetch body directly:
      //fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(team1Logo)
      socket.emit('payload', {
        type: 'control',
        data: { ...formJson,
          seriesLogo: `${seriesLogo}`, 
          team1Logo: `${team1Logo}`,
          team1Banner: `${team1Banner}`,
          team2Logo: `${team2Logo}`,
          team2Banner: `${team2Banner}` }
      });
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
            <h2>SERIES INFO</h2>
            <div>
              SERIES LOGO:
              <input type="file" name="seriesLogo" onChange={seriesLogoToB64}/>
              <img src={seriesLogo} width="100" height="100"/>
            </div>
            <div>
              BEST OF:
              <label><input type="radio" name="bestOfChoice" value={5} defaultChecked={true} /> 5</label>
              <label><input type="radio" name="bestOfChoice" value={7} /> 7</label>
            </div>
            <br/>
            <div>
              TEAM 1 SERIES SCORE:
              <label><input type="radio" name="team1SeriesScore" value={0} defaultChecked={true}/>0</label>
              <label><input type="radio" name="team1SeriesScore" value={1}/>1</label>
              <label><input type="radio" name="team1SeriesScore" value={2}/>2</label>
              <label><input type="radio" name="team1SeriesScore" value={3}/>3</label>
              <label><input type="radio" name="team1SeriesScore" value={4}/>4</label>
            </div>
            <div>
              TEAM 2 SERIES SCORE:
              <label><input type="radio" name="team2SeriesScore" value={0} defaultChecked={true}/>0</label>
              <label><input type="radio" name="team2SeriesScore" value={1}/>1</label>
              <label><input type="radio" name="team2SeriesScore" value={2}/>2</label>
              <label><input type="radio" name="team2SeriesScore" value={3}/>3</label>
              <label><input type="radio" name="team2SeriesScore" value={4}/>4</label>
            </div>
            <div>
              TEAM 1 LOGO:
              <input type="file" name="team1Logo" onChange={t1LogoToB64}/>
              <img src={team1Logo} height="38" width="38" alt=""/>
            </div>
            <div>
              TEAM 1 BANNER:
              <input type="file" name="team1Banner" onChange={t1BannerToB64}/>
              <img src={team1Banner} height="38" width="190" alt=""/>
            </div>
            <br/>
            <div>
              TEAM 2 LOGO:
              <input type="file" name="team2Logo" onChange={t2LogoToB64}/>
              <img src={team2Logo} height="38" width="38" alt=""/>
            </div>
            <div>
              TEAM 2 BANNER:
              <input type="file" name="team2Banner" onChange={t2BannerToB64}/>
              <img src={team2Banner} height="38" width="190" alt=""/>
            </div>
            <br/>
            {/*<div>
              TEAMS 1:
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
                <option value="dominion">Old Dominion</option>
              </select>
              TEAM 2:
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
                <option value="dominion">Old Dominion</option>
              </select>
            </div>*/}
            <br/>
          </div>
          <hr/>
          <div className="scorebug-info">
            <h2>SCOREBUG TEXT</h2>
            <label htmlFor="seriesTitle">SERIES TITLE:</label><br/>
            <input type="text" name="sbSeriesTitle"/><br/>
            <label htmlFor="gameInfo">GAME INFO:</label><br/>
            <input type="text" name="sbGameInfo"/><br/><br/>
          </div>
          <hr/>
          <div className="postgame-info">
            <h2>POSTGAME TEXT</h2>
            <label htmlFor="pgTitle">POSTGAME TITLE:</label><br/>
            <input type="text" name="pgTitle"/><br/>
            <label htmlFor="pgSeriesTitle">SERIES TITLE:</label><br/>
            <input type="text" name="pgSeriesTitle"/><br/>
            {/*<label htmlFor="pgT1Name">TEAM 1 NAME:</label><br/>
            <input type="text" name="pgT1Name"/><br/>
            <label htmlFor="pgT2Name">TEAM 2 NAME:</label><br/>
            <input type="text" name="pgT2Name"/><br/><br/>*/}
          </div>
          <hr />
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>
      </Grid>
    )
};

export default ControlPanel;