import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export default function App() {
  
  return (
    <Router>
      <div>
        <center>
          <ul className="block">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructions">Instructions</Link>
            </li>
            <li>
              <Link to="/screenshots">Screenshots</Link>
            </li>
          </ul>
        </center>
        <Switch>
          <Route path="/screenshots">
            <Screenshots />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <h1 className="bluebg">| <span className="orangered">Minecraft Server</span> | <span className="blue">'ThatBot.Ninja'</span></h1>
      <h2 className="graybg" style={{ backgroundImage: "url(/img/placeholder.png)" }}>|  <span className="orange">Better Pack your Lunch Before Your Friends</span> | <span className="yellowtextonly">Find Out!</span></h2>
      <hr />
      <p>
      <div className="container">
        <span class="box"><h1 className="yellow inline padded">PLAY MINECRAFT ON OUR SERVERS</h1></span>
      </div>
      </p>
      <img className="padded" src="./img/pickaxe.png" height="125" width="125" />
      <p>
        <strong className="fontsize">While your friends are all out having fun, you have the awesome option to play <span className="blue font-size">Minecraft</span>.
        <br />
        Have fun so you don't have to worry about your friends.</strong>
        <br />
      </p>
      <hr />
      <h3 className="yellow inline">Do You  Want To Play?</h3>
      <br />
      <Link to="/instructions" className="btn btn-warning btn-lg paddbutton">Click Here!</Link>

      {/* <a className="btn btn-warning btn-lg padbutton" href="/instructions">Click Here!</a> */}

      <p className="padbottom marged">
        Join our Discord Server <strong>@</strong> <a href="https://discord.gg/HR9jCRgQ" alt="Join Our Discord Server">Join our Discord</a>
      </p>
      <p>
        ❤️❤️❤️
        <br />
        <strong className="blue fontsize">Make friends online</strong>
      </p>
      <p>
        However life goes, it doesn't matter if you have friends because you should be best friends with yourself,
        <br />
        to keep yourself entertained.
        <br />
        As long as you can do that then you can choose anybody to hang with.
      </p>
      <p>
        <strong>Join our servers</strong> and find new friends, or invite your friends online.
      </p>
      <hr />
      <p>
        ❤️❤️❤️
        <br />
        <strong className="blue fontsize">All you need is the server address and to read the instructions page</strong>
      </p>
      <p>
        <Link className="red" to="/instructions">Read the Instructions on how to Connect to our Server</Link>
      </p>
      <hr />
      <div className="orangebg padded">
        {/* this div is a color filler */}
      </div>
      <p className="goldbg nomargin padded">
        <strong>You can use</strong> <em><span className="blue fontsize padded">"thatbot.ninja:25555"</span></em> <strong>in the <strong>server IP field</strong> when you add a server
        <br />
        in <strong>Multi-Player</strong> when you <strong>Add a Server</strong> in your game in <span className="blue fontsize"><em>Minecraft</em></span>.</strong>
      </p>
      <div className="graybg padded" style={{ backgroundImage: "url(/img/placeholder.png)" }}>
        <iframe src="https://giphy.com/embed/WtDaSUB8GDiRW" width="357" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/minecraft-WtDaSUB8GDiRW">via GIPHY</a></p>
      </div>
      <div className="yellow">
        <strong>Do you have what it takes to battle</strong> your surroundings and <strong>keep an eye out with other players</strong>!
        <br />
        
        Make <strong>powerfull alliances</strong> and trade in your goods for more comfort <strong>to win together</strong>.
        <br />
        This <strong>epic game of Minecraft</strong> you can't afford to not play on our <strong>Minecraft servers</strong>!
      </div>
      <h2 className="whitebg">Put "<span className="blue">thatbot.ninja:25555</span>" in the "<span className="orange">Add Server</span>" box in "<span className="orangered">Minecraft (Java Edition)</span>" and connect.</h2>
      If you get server is hibernating connect to it, so that it will start, then wait 60 seconds for it to come online and you can join.
      <div class="alert alert-warning" role="alert">
        Bring Fun Into Your World With Minecraft! ⭐ <a href="https://www.minecraft.net" alt="Minecraft website" target="_blank">Minecraft Developer's Website</a> ⭐
      </div>
      <img className="roundedcorners" src="./img/Minecraft.jpg" width="600" height="400" />
      <br />
      <img className="padded" src="./img/pickaxe2.png" height="125" width="125" />
      <p className="yellow">Join Our <strong>&lt;Mailing List&gt;</strong> for Offers and Promotions!</p>
      <footer>
        <p>
          <div><sub>Icons made by <a href="https://www.flaticon.com/authors/aldo-cervantes" title="Aldo Cervantes">Aldo Cervantes</a> &amp; <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></sub></div>
          <br />
          Copyright(&copy;)(2021) All Rights Are Reserved.
        </p>
        </footer>
    </div>
  );
}

function Screenshots() {
  return (
  <div className="App">
    <h1 className="bluebg">| <span className="orangered">Minecraft Server</span> | <span className="blue">'ThatBot.Ninja'</span></h1>
    <h2 className="graybg" style={{ backgroundImage: "url(/placeholder.png)" }}>|  <span className="orange">Better Pack your Lunch Before Your Friends</span> | <span className="yellowtextonly">Find Out!</span></h2>
    <hr />
    <h2>Screenshots</h2>
    <p>On this page we have posted some screenshots from while playing on our server:</p>
    <img src="./img/screenshots/screenshot1.png" height="1008" width="958"  alt="Screenshot -1-" />
    <br />
    <img src="./img/screenshots/screenshot2.png" height="1008" width="958" alt="Screenshot -2-" />
    <br />
    <img src="./img/screenshots/screenshot3.png" height="1080" width="1920" alt="Screenshot -3-" />
    <hr />
  </div>
  );
}

function Instructions() {
  return (
    <div className="App">
      <h1 className="bluebg">| <span className="orangered">Minecraft Server</span> | <span className="blue">'ThatBot.Ninja:25555'</span></h1>
      <h2 className="graybg" style={{ backgroundImage: "url(/placeholder.png)" }}>|  <span className="orange">Better Pack your Lunch Before Your Friends</span> | <span className="yellowtextonly">Find Out!</span></h2>
      <hr />
      <h3>Instructions For Connecting To Our Server</h3>
      <strong>@</strong> <h3 className="inline">Server Address: <span className="blue"><em>thatbot.ninja:25555</em></span></h3>
      <p>
        <img src="servers-img.png" height="90" width="90" alt="Servers Icon" />
      </p>
      <h1 className="orangered">To connect you need to do the following:</h1>
      <p>(Because our server might be hibernating if noone has connected)</p>
      <hr />
      <ul>
        <li className="block">⭐ You will need to <strong>add 1 server</strong></li>
        <li className="block">⭐ Open the game and go to <strong>Multi-Player</strong> then <strong>Add the Server there</strong>.</li>
        <li className="block">⭐ In the address box <strong>type the following address</strong>: <span className="blue">thatbot.ninja:25555</span></li>
        <li className="block">⭐ Use that address &amp; port to <strong>start the server</strong> if it is hibernating.</li>
        <li className="block">⭐ The server you've added is the one you are going to <strong>connect</strong> to.</li>
        <li className="block">⭐ The way it works is you <strong>1st connect to the server to wake it up</strong>. Second, after which you have to wait about 30-50 seconds, after which you can connect to the server.</li>
        <li className="block">⭐ You can <strong>refresh the list of servers</strong> in your game, and if you've 1st connected to server to wake it then <strong>wait for about 40 seconds</strong>, then after you refresh you should see the server come online.</li>
        <li className="block">⭐ The "<strong>Server is Hibernating</strong>" disappears on the server if you press <strong>Refresh</strong>, then the connection stats show green bars behind the server showing the latency.</li>
      </ul>
      <hr />
      <p><h1 className="orangered">(Log in and have fun)</h1></p>
      <h3>
        <span className="blue">
          Finally... As the last step...
          <br />
          You have to connect to the 2nd server to Log in and play the game.
        </span>
      </h3>
      <hr />
      <p>When there is no activity on the server for 60 seconds (0 people connected) it will hibernate.</p>
      <hr />
      <p>❤️❤️❤️</p>
      <img src="./img/server/server-1.png" alt="Server -1-" />
      <p className="blue">The starter server has the <span className="red">"<strong>:</strong>25555"</span> added to the server name. Don't forget the colon '<span className="red"><strong>:</strong></span>' ...</p>
      <img src="./img/server/server-2.png" alt="Issue Wake Up" />
      <p className="blue">
        When the server is hibernating you can't connect to "<span className="red">thatbot.ninja</span>". First wake it up!
        <br />
        Do so by connecting to the start server first and then click on "Go Back" and wait for about 30-40 seconds. Then finally connect to the 2nd server (<span className="red">thatbot.ninja</span>).
      </p>
      <img src="./img/server/server-3.png" alt="Server is Hibernating" />
      <p className="blue">
        When the server is ready to log in and when you press "Refresh", it should look like the picture above.
        <br />
        Then log into the server: <span className="red">"thatbot.ninja"</span>. See the green bars behind it?
      </p>
      <img src="./img/server/server-4.png" alt="Server is Warming Up" />
      <p className="blue">Server is warming up.</p>
      <img src="./img/server/server-5.png" alt="Server is Ready" />
      <p className="blue">Server is ready.</p>
      <hr />
      <footer>
        <p>
          <div>
            <sub>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></sub>
          </div>
          <br />
          Copyright(&copy;)(2021) All Rights Are Reserved.
        </p>
        </footer>
      </div>
  );
}


