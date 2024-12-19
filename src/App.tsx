import { Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation'
import WallpapersPage from './pages/WallpapersPage'
import AimTrainingPage from './pages/AimTrainingPage'
import ColorGame from './pages/ColorGame'
import SlidesPage from './pages/SlidesPage'
import DragAndDropPage from './pages/DragAndDropPage'
import { SnowOverlay } from 'react-snow-overlay'

function App() {
  return (
    <>
      <SnowOverlay maxParticles={100} />
      <Navigation />
      <Routes>
        <Route path="/mini-games/" element={<WallpapersPage />} />
        <Route path="/mini-games/aimtraining" element={<AimTrainingPage />} />
        <Route path="/mini-games/colorgame" element={<ColorGame />} />
        <Route path="/mini-games/slides" element={<SlidesPage />} />
        <Route path="/mini-games/draganddrop" element={<DragAndDropPage />} />
      </Routes>
    </>
  )
}

export default App
