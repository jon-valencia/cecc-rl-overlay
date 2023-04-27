# ROCKET LEAGUE OVERLAY INSTRUCTIONS
## _Prerequisites_
These are the things you NEED to download before running this application:
- [NodeJS]("https://nodejs.org/en/download")
- [BakkesMod]("https://bakkesplugins.com/")

## _Initial Setup_
- First, download this repository to your computer.
- Next, open the BakkesMod installation folder by opening BakkesMod, clicking "File" and then selecting "Open BakkesMod folder". Drag the file named "SOS.dll" from this repository into the "plugins" folder and drag the file named "sos.set" into the "plugins/settings" folder.

    <img title="a title" alt="Alt text" src="/imgs/rl-guide-1.png" /> 
    
- From there, open the repository on your computer and open a PowerShell terminal for the "overlay" and "rocketsocket" folders by pressing shift+rclick in the respective folders.

    <img title="a title" alt="Alt text" src="/imgs/rl-guide-2.png" />

- In both PowerShell terminals enter the commands below. This will start the app, websocket, and open a new window in your browser
    ```sh
    npm install
    npm start
    ```

## _Running The App_
When you first open the app you'll see the homepage with buttons to take you to the control panel, overlay, or postgame. You won't really need to open the overlay or postgame from here, but the control panel handles all the text elements and logos in the overlay and postgame.

<img title="a title" alt="Alt text" src="/imgs/rl-guide-3.png" />
<img title="a title" alt="Alt text" src="/imgs/rl-guide-4.png" />

### _OBS/VMix Setup_
To setup the overlay and postgame for use in broadcast create a new browser source and set the URL to "https://localhost:3000/overlay" for the overlay or "https://localhost:3000/postgame" for the postgame. After, make sure the width is set to 1920 and the height 1080.

<img title="a title" alt="Alt text" src="/imgs/rl-guide-5.png" />

