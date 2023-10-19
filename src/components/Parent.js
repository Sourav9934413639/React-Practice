import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sourav"
      }
    }
 componentDidMount(){
    setInterval(()=>{
        this.setState({name:"Sourav"})
    },2000)
 } 
  render() {
    const {name}=this.state;
    console.log("Parent");
    return (
      <div>
        <h1>Parent</h1>
        <ClickCounterTwo name={name}/>
        <HoverCounterTwo name={name}/>
      </div>
    )
  }
}

export default Parent
