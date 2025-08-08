import React from 'react'
import { Search } from './Search'
import { ListItem } from './ListItem'

const App = () => {
  
  function addTodo(){
     console.log('Button click')
  }

  return (
    <>
      <div className='h-screen  flex flex-col items-center justify-center space-y-6'>
        <div className='flex items-center justify-center text-blue-400 text-7xl'>
             todos
        </div>

        <Search onAdd={addTodo}/>
       
      </div>
    </>
  
    
  )
}

export default App