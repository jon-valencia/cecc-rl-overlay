import { useContext, useState } from "react";
import { SocketContext } from "contexts/SocketContexts";

import secondsToMinutes from "functions/secondsToMinutes";

function ControlPanel() {
    const [state, setState] = useContext(SocketContext);

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
        
        setState({ ...state,
            tournamentInfo: { ...formJson } });

        console.log(formJson);
      }
    
      return (
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Series Title: <input name="seriesTitle" defaultValue="CECC Finals" />
          </label>
          <label>
            Game info: <input name="gameInfo" defaultValue="Game 1 | Bo5" />
          </label>
          <hr />
          <p>
            Best Of:
            <label><input type="radio" name="bestOfChoice" value={3} /> 3</label>
            <label><input type="radio" name="bestOfChoice" value={5} defaultChecked={true} /> 5</label>
            <label><input type="radio" name="bestOfChoice" value={7} /> 7</label>
          </p>
          <hr />
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>
      );
};

export default ControlPanel;