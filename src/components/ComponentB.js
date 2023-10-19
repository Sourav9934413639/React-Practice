import React from 'react'
import ComponentC from './ComponentC'
import { UserConsumer } from './UserContextApi'
const ComponentB = () => {
  return (
      <UserConsumer>
        {
            (user)=>{
                return (
                    <>
                        <ComponentC/>
                        <h1>My role is {user.role}</h1>
                    </>
                )
            }
        }
      </UserConsumer>
  )
}

export default ComponentB
