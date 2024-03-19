import { useState } from 'react';
import './App.css';
import data from './Components/data';
import List from './Components/List';

function App() {
  const [people, setPeople] = useState(data)

  return(
   
     <div className='min-h-screen flex justify-center bg-teal-300 '>
    <section className='w-1/3 h-4/5 my-4 border-2 px-3 py-3 rounded-sm bg-white-1 mt-8'>
      <div className='w-full text-center font-sans'><h3>{people.length} birthdays today</h3></div>
      
      <List folks={people}/>
      <button className='w-full h-10 text-white-1 font-sans hover:  bg-pink-400 p-1 rounded-md' onClick={() => {setPeople([])}}>Clear All</button>
    </section>
  </div>

  
  )
  
}

export default App;
