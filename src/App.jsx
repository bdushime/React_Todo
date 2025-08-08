import React, { useState } from 'react';
import { Search } from './Search'
import { ListItem } from './ListItem'

const App = () => {

  const [items, setItems] = useState([]);
  
  function addTodo(text){
    console.log(text)
     const newItem = { id:Date.now() , text: text};
     setItems(prev => [...prev, newItem]);
  }

  return (
    <>
      <div className='h-screen  flex flex-col items-center justify-center space-y-6'>
        <div className='flex items-center justify-center text-blue-400 text-7xl'>
             todos
        </div>

        <Search onAdd={addTodo}/>

        <div className="space-y-2 w-full max-w-md">
        {items.map((item,index )=>(
          <ListItem key={index} text={item.text} />
        )) }
        </div>
        
      </div>
    </>
  
    
  )
}

export default App