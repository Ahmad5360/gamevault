import React from "react";
import war from "../images/war.jpg";
import dragon from "../images/dragon.avif";
import day from "../images/day.webp";
export default function Blog() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h3>Latest News</h3>
          <hr
            style={{ color: "#fff", border: "3px solid white", width: "30%" }}
          />
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="mt-4 post_content">
              <div>
                <img src={war} className="img-fluid" alt="Warzone" />
              </div>
              <div className="mt-4 post">
                <h3>
                  Helpful Warzone 2 Tip Makes Precision Airstrike Easier to Use
                  Effectively
                </h3>
                <hr style={{ color: "#fff", border: "3px solid white" }} />
                <p>
                  A helpful Call of Duty: Warzone 2 tip makes the Precision
                  Airstrike killstreak even more accurate and effective during
                  matches. Warzone 2 is a full sequel to 2020’s Warzone, and it
                  comes with some noticeable changes from the original. However,
                  some of these changes are now being reverted, as the Gulag is
                  going to return to a 1v1 format with Season 2 of Warzone 2.
                  <br />
                  Like the standard multiplayer mode in Call of Duty games,
                  Warzone 2 allows players to use killstreaks to kill opponents.
                  The Precision Airstrike can extremely deadly, and some users
                  consider it to be one of the most useful killstreaks in Call
                  of Duty: Warzone 2. Now, one fan shows a great way to further
                  improve its effectiveness, making the Precision Airstrike even
                  more beneficial.
                </p>
              </div>
            </div>
            <div className="mt-4 post_content">
              <div>
                <img src={dragon} className="img-fluid" alt="Dragon Age" />
              </div>
              <div className="mt-4 post">
                <h3>
                  Rumor: Dragon Age: Dreadwolf Release is Still a Long Way Off
                </h3>
                <hr style={{ color: "#fff", border: "3px solid white" }} />
                <p>
                  A new leak for Dragon Age: Dreadwolf suggests that it may not
                  come out anytime soon as some important features are still
                  missing from the game. Dragon Age: Dreadwolf is the sequel to
                  2014’s Dragon Age: Inquisition, and it marks the fourth
                  mainline entry in the Dragon Age franchise. Dragon Age:
                  Dreadwolf has reportedly undergone a change in direction since
                  its inception, as BioWare has confirmed it to be a
                  single-player game.
                  <br />
                  This wasn’t always the case, as Dragon Age: Dreadwolf was
                  planned as a live service experience with multiplayer
                  gameplay. EA and BioWare completely changed the direction and
                  focus to match the single-player nature of the previous games,
                  presumably due to the success of Star Wars Jedi: Fallen Order
                  and to avoid any potential fate similar to Anthem. Now, a ton
                  of information about Dragon Age: Dreadwolf has been leaked,
                  including the current state of the title and some of its
                  gameplay elements.
                </p>
              </div>
            </div>
            <div className="mt-4 post_content">
              <div>
                <img src={day} className="img-fluid" alt="Day Before" />
              </div>
              <div className="mt-4 post">
                <h3>
                  The Day Before gameplay reveal actually happened, and it was
                  as bizarre as you'd expectctively
                </h3>
                <hr style={{ color: "#fff", border: "3px solid white" }} />
                <p>
                  It was slightly behind schedule, but the promised gameplay
                  reveal of the upcoming zombie survival game The Day
                  Before(opens in new tab) actually happened today, and as a guy
                  who's played a lot of videogames, I can tell you that this
                  definitely looks like one.
                  <br />
                  To be blunt, the video is very dull. It's fine, in the sense
                  that all the usual notes are hit: Cupboards are searched,
                  weapons are crafted, zombies are seen and shot. But it's very
                  sparse, with long stretches of nothing but jogging through
                  ruined city streets and way too much time spent at a crafting
                  station.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
