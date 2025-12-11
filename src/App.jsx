import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieCard from "./pages/MovieCard"
import Home from "./pages/Home"
import Layout from "./layout/Layout"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >

            <Route path='/' element={<Home />} />
            <Route path='/movie' element={<MovieCard />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}