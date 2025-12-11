import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MovieCard } from "./components/MovieCard"
import { Layout } from "./layout/Layout"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >

            <Route path='/' element={ } />
            <Route path='/boh' element={ } />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}