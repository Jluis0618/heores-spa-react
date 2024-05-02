import React from 'react'
import { NavBar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, Search } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'


export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DcPage />} />
              <Route path="search" element={<Search />} />
              <Route path="hero/:id" element={<HeroPage />} />

              {/* SEARCH */}
              {/* HEROE BY ID */}

              <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>
      </div>
    </>
  )
}
