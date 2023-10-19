import React from 'react'

const ClickCounterTwo = ({name}) => {
    console.log(`Child1- ${name}`);
   
  return (
    <div>
      <h2>Child1 - {name}</h2>
    </div>
  )
}

export default ClickCounterTwo
