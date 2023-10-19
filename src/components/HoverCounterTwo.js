import React from 'react'

const HoverCounterTwo = ({name}) => {
    console.log(`Child2- ${name}`);
  return (
    <div>
      <h2>Child2- {name}</h2>
    </div>
  )
}

export default HoverCounterTwo
