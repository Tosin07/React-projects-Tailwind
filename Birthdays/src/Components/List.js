import React from 'react'

const List = ({folks}) => {
  return (
    <div className=''>
      {folks.map((folk) => {
        const {id, name, image, age} = folk
        return (
         <div key={id} className='w-full h-full flex p-2'>
            <img className=' object-cover rounded-1 h-16 w-16' src={image}></img>
           <div className='pl-3'>
            <h3 className='font-sans hover:font-serif' >{name}</h3>
            <p className='font-light'>{age} years</p>
           </div>
         </div>
        )
      })}
    </div>
  )
}

export default List