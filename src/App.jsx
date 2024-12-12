import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import QuizFisrt from "./pages/QuizFirst/QuizFirst"
import { GlobalStyle } from "./GlobalStyle";
import "./index.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz1" element={<QuizFisrt />} /> {/* 추가된 라우트 */}

      </Routes>
    </div>
  );
}
export default App;