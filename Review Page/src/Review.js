import React, { useState } from 'react'
import people from './data'
import styles from './index.module.css'
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const checkNumber = (number) => {
   if (number >  people.length-1) {
    return 0
   }
   if (number < 0) {
    return people.length - 1 
   }
    return number
  }

  function randomPerson() {
     let randomnumber = (Math.floor(Math.random() * people.length))
     if (randomnumber === index) {
       return index + 1
     }
     setIndex(randomnumber)
  }
  
  const nextPerson = () => {
    setIndex((index) => {
     let newIndex = index + 1
     return checkNumber(newIndex)
    })
  }
 
  const prevPerson = () => {
    setIndex((index) => {
    return checkNumber(index - 1)
    })
  }


  return (
    <div className={styles.review}>
     <div className={styles.imgcontainer}>
      <img src={image} alt={name} className={styles.personimg}></img>
      <span className={styles.quoteicon}>
        <FaQuoteRight></FaQuoteRight>
      </span>
     </div>
     <h4 className="mb-1 uppercase">{name}</h4>
     <p className='uppercase text-xs font-extralight pb-1 text-yellow-500'>{job}</p>
     <p className='font-sans'>{text}</p>
     <div >
      <button onClick={prevPerson} className='mx-2 text-red-400'><FaChevronLeft></FaChevronLeft></button>
      <button onClick={nextPerson} className='text-blue-400'><FaChevronRight></FaChevronRight></button>
     </div>
     <button onClick={randomPerson} className={styles.randombtn}>Random</button>
    </div>
  )
}

export default Review