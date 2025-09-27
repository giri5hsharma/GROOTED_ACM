import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Game from './Pages/Game'
import Play from './Pages/Play'
import IRLQuests from './Pages/IRLQuests'
import Leaderboard from './Pages/Leaderboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/play" element={<Play />} />
        <Route path="/irl-quests" element={<IRLQuests />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App
