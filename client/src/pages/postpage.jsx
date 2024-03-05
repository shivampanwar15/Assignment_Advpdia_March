import React from 'react'
import Header from '../components/Header.jsx'
function Postpage({title, content, date}) {
  return (
    <>
    <Header/>
    <div className='w-screen h-screen bg-gradient-to-l from-cyan-100 to-blue-100 flex justify-center'>
    
    <div className='w-2/3 h-auto bg-white py-16 px-16 items-center '>

      <div className="outline outline-blue-100 h-16 bg-gray">
        <h1 className='font-serif text-lg px-4'>{date}</h1>
        <h1 className='font-serif font-bold text-2xl text-gray-700 px-2 text-wrap truncate'>{title}</h1>
      </div>
      <div >
        <p className=' font-serif py-3 px-4 overflow-hidden text-wrap text-ellipsis'>
          {content}
        </p>
 
     

    </div>




    </div>
    
    
    
    
    
    
    </div>
    </>
  )
}

export default Postpage