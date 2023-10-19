import React from 'react'
import { UserConsumer } from './UserContextApi'
const ComponentC = () => {
  return (
    <UserConsumer>
       {
        (user)=>{
            return (
                <>
                <h1>Component C</h1>
                <h1>Hello, this is {user.name} and my age is {user.age}</h1>
                </>
            )
        }
       }
    </UserConsumer>
  )
}

export default ComponentC
