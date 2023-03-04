import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import menja from "../images/MENJA.png";
import tic_tac_toe from "../images/Tic-Tac-Toe.png";
import cube from "../images/cube.png";
import snake from "../images/Tic-Tac-Toe.png";
import color_blast from "../images/Color-Blast.png";
import t_block from "../images/Tower-Blocks.png";
import colorOn from "../images/COLORON-GAME.png";
import infinite_runner from "../images/Infinite-Runner-game.png";
import twozfe from "../images/2048-game.png";

function Home() {
  useEffect(() => {
    consoleText(
      [
        "Welcome To GameVault",
        "Where Gamers Unite",
        "Explore the Boundless World of Gaming.",
      ],
      "text",
      ["tomato", "white", "lightblue"]
    );
  }, []);

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }

  // OnClick Handler For Games
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="title text-center">
            {/* <h1>GameVault</h1> */}
            <div className="console-container">
              <span id="text"></span>
              <div className="console-underscore" id="console">
                &#95;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="game-library text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={menja} alt="Game 1" />
              <div className="game-info">
                <h3>MENJA</h3>
                <Link to="menja">
                  <button
                    id="gbtn"
                    className="material-symbols-outlined"
                    
                  >
                    play_arrow
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={tic_tac_toe} alt="Game 2" />
              <div className="game-info">
                <h3>Tik-Tac-Toe</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={cube} alt="Game 1" />
              <div className="game-info">
                <h3>The Cube</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={snake} alt="Game 1" />
              <div className="game-info">
                <h3>SNAKE</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={color_blast} alt="Game 1" />
              <div className="game-info">
                <h3>Color Blast</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={t_block} alt="Game 1" />
              <div className="game-info">
                <h3>Tower Blocks</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={colorOn} alt="Game 1" />
              <div className="game-info">
                <h3>ColorOn</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={infinite_runner} alt="Game 1" />
              <div className="game-info">
                <h3>Infinite Runner</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="game-card action text-center">
              <img src={twozfe} alt="Game 1" />
              <div className="game-info">
                <h3>2048</h3>
                <button id="gbtn" className="material-symbols-outlined">
                  play_arrow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
