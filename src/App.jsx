import React, { useState } from 'react';
import { Search } from './Search'
import { ListItem } from './ListItem'

const App = () => {

  const [items, setItems] = useState([]);
  
  function addTodo(){
     const newItem = { text:'New Todo'};
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
        {items.map(item =>(
          <ListItem key={item.id} text={item.text} />
        )) }
        </div>
        
      </div>
    </>
  
    
  )
}

export default App