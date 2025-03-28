import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/nottick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt='' className='w-7'></img>
            <p className='text-slate-700 ml-4 text-[17px]'>
              {text}</p>
        </div>
      
      <img onClick={()=>{deleteTodo(id)}} 
      src={delete_icon} className='w-3.5 cursor-pointer'></img>


    </div>
  )
}

export default Todoitems
