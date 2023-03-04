import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LatestNews from "./Components/LatestNews";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer"
import Menja from "./Components/Games/Menja/Menja";
import TicTacToe from "./Components/Games/Tic-Tac-Toe/TicTacToe";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          title={"GameVault"}
          Link1={"Home"}
          Link2={"Latest News"}
          Link3={"About Us"}
          Link4={"Contact"}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/latestnews" element={<LatestNews />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/latestnews" element={<LatestNews />} />
          <Route exact path="/menja" element={<Menja />} />
          <Route exact path="/tictactoe" element={<TicTacToe />} />
          
        </Routes>
        <Footer title={"GameVault"}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
