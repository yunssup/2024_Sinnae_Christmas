import React from "react";
import { Route, Routes } from "react-router-dom";

import Start from "./pages/Start/Start";
import QuizFisrt from "./pages/QuizFirst/QuizFirst"
import QuizSecond from "./pages/QuizFirst/QuizSecond"
import QuizThird from "./pages/QuizFirst/QuizThird"
import QuizFourth from "./pages/QuizFirst/QuizFourth"
import QuizFifth from "./pages/QuizFirst/QuizFifth"
import False from "./pages/Start/False"
import Finish from "./pages/Start/Finish"

import { GlobalStyle } from "./GlobalStyle";
import "./index.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz1" element={<QuizFisrt />} />
        <Route path="/quiz2" element={<QuizSecond />} />
        <Route path="/quiz3" element={<QuizThird />} />
        <Route path="/quiz4" element={<QuizFourth />} />
        <Route path="/quiz5" element={<QuizFifth />} />

        <Route path="/false" element={<False />} />
        <Route path="/finish" element={<Finish />} />



      </Routes>
    </div>
  );
}
export default App;