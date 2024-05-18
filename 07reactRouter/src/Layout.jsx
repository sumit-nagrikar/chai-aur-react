import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />//Only components in outlet gonna change remaining will stay same when rendering
    <Footer />
    </>
  )
}

export default Layout
