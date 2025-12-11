import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import MovieCard from "./pages/MovieCard"

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