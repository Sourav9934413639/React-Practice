import React, { useEffect, useState } from 'react'
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';

const Parent2 = () => {
   const [name,setName]=useState('Sanjana');
   useEffect(()=>{
    setInterval(()=>{
        setName('Sanjana');
    },2000)
   },[])
   console.log(`Parent ${name}`)
  return (
    <div>
      <h1>Parent {name}</h1>
      <ClickCounterTwo name={name}/>
      <HoverCounterTwo name={name}/>
    </div>
  )
}

export default Parent2
