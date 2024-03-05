import React from 'react'
import Header from '../components/Header.jsx'

function Home() {



  return (
    <>
      <Header />
      <div className='w-screen h-screen bg-auto bg-gradient-to-l from-cyan-100 to-blue-100 '>


        <h1 className='text-7xl font-mono antialiased font-bold text-center py-20 '>Welcome to QuietConnect !</h1>



        <h1 className='text-4xl font-mono antialiased font-bold text-center  py-20'>In Silence We Connect: Anonymous Thoughts, Shared.</h1>

      </div>
    </>
  )
}

export default Home