import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LatestNews from "./Components/Latest_News";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title={"SITE NAME"}
          Link1={"HOME"}
          Link2={"BLOG"}
          Link3={"About US"}
          Link4={"Contact"}
          />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/latestnews" element={<LatestNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
