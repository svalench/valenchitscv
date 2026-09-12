import { Routes, Route } from 'react-router'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ru/" element={<Home lang="ru" />} />
      <Route path="/be/" element={<Home lang="be" />} />
      <Route path="*" element={<main><h1>404 — Page not found</h1><a href="/">Home</a></main>} />
    </Routes>
  )
}
