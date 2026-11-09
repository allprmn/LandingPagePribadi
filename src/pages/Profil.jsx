import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Certificates from '../components/Certificates'
import Footer from '../components/Footer'
import MataKuliah from '../components/MataKuliah'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /> 
        <Education />
        <Certificates />
        <MataKuliah />
      </main>
      <Footer />
    </>
  )
}