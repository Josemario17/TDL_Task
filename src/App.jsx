import Task from './Task'
import { ReactDOM } from 'react'
import { useState } from 'react'

function App() {
  return (
    <>
    <div className='w-screen h-screen flex items-start pt-32'>
    {
         // task create area
        }
        <div className='w-2/6 h-auto flex items-start justify-center flex-wrap mx-auto'>
            <form action="" id='form' className='relative w-full h-12 bg-gray-900 border-l-4 border-emerald-600 px-2 flex items-center'>
            <input type="text" id='textTask' placeholder='Adicione um novo item' className='w-96 h-full bg-transparent outline-none pl-2' required/>
            <button type='submit' className='text-emerald-300 duration-500 hover:text-emerald-600'>Adicionar</button>
            <button type='button' className='mx-3' onClick={()=>{document.getElementById("dropDiv").classList.remove("hidden")}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                  </svg>
              </button>
              <div id='dropDiv' onMouseLeave={()=>{document.getElementById("dropDiv").classList.add("hidden")}} className='hidden z-10 absolute start-96 top-12 rounded-md py-4 w-auto bg-gray-900 text-center'>
                <button className='w-full mb-2 hover:bg-emerald-300 hover:text-gray-800'>Completas</button> 
                <button className='w-full hover:bg-emerald-300 hover:text-gray-800'>Pendentes</button> 
              </div>
          </form>

          <div className='relative w-full h-auto grid' id='areaToNewTaks'>
            {
            // tasks results //
            }

          </div>
      </div>
    </div>
    </>
  )
}
export default App
