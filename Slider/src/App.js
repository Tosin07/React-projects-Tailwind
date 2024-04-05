import { useEffect, useRef, useState } from 'react';
import people from './data';
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

function App() {
  const [names, setNames] = useState(people)
  const [index, setIndex] = useState(0)

  let timeRef = useRef(null)

  const nextTime = () => {
   setIndex((oldIndex) => {
    let newIndex = oldIndex + 1
    if (newIndex > people.length) {
      newIndex = 0
    }
    return newIndex
   })
  }

   const prevTime= () => {
   setIndex((oldIndex) => {
    let newIndex = oldIndex - 1
    if (newIndex < 0) {
      return newIndex = people.length -1
    }
    return newIndex
   })
  }

  useEffect(() => {
    timeRef.current = setInterval(() => {
     setIndex((oldIndex) => {
      let newIndex = oldIndex + 1
      if(newIndex > people.length - 1) {
        newIndex = 0
      }
      return newIndex
     }) 
    }, 4000);
    return () => {clearInterval(timeRef.current)}
  }, [index])


   
 
  return (
   <section className='section'>
    <div className='title'> 
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>
    <div className='section-center'>
      {names.map((nom, nameIndex) => {
        const {id, image, name, title, quote} = nom
        let position = 'nextSlide'
 if(nameIndex === index) {
  position = 'activeSlide'
 }
 if(nameIndex === index - 1 || (index === 0 && nameIndex === people.length-1)) {
  position = 'lastSlide'
 }
        return ( <article className={position} key={id}>
         <img src={image} alt={name} className='person-img'></img>
         <h4>{name}</h4>
         <p className='title'>{title}</p>
         <p className='text'>{quote}</p>
         <FaQuoteRight className='icon'/>
        </article>)
      })}
      <button onClick={prevTime} className='prev'><FiChevronLeft/></button>
      <button onClick={nextTime} className='next'><FiChevronRight/></button>
    </div>
    
   </section>
  )
}

export default App;
