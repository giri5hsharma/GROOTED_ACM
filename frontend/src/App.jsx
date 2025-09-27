import React from "react"
import { Route, Routes } from "react-router-dom"
import Game from "./Pages/Game"
import Leaderboard from "./Pages/Leaderboard"
import IRLQuests from "./Pages/IRLQuests"
import Play from "./Pages/Play.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Game />} />
        <Route path="/game" element = {<Play /> } />
        <Route path="/leaderboard" element = {<Leaderboard />} />
        <Route path="/IRLQuests" element = {<IRLQuests />} />
      </Routes>
    </>
  )
}

export default App
