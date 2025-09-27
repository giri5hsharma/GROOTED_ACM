import React from "react"
import { Route, Routes } from "react-router-dom"
import Game from "./Pages/Game"
import Leaderboard from "./Pages/Leaderboard"
import IRLQuests from "./Pages/IRLQuests"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/game" element = {<Game /> } />
        <Route path="/leaderboard" element = {<Leaderboard />} />
        <Route path="/IRLQuests" element = {<IRLQuests />} />
      </Routes>
    </>
  )
}

export default App
