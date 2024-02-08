import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Detail from './detail'
import Home from './home'
export default function Index() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  )
}
