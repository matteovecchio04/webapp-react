import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >

            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<MovieDetails />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}