import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';
export class HoverCounter extends Component {
    
  render() {
    const {count,clickHandler,name}=this.props;
    return (
      <div>
        <button onMouseOver={clickHandler}>Hovered by {name}- {count} times</button>
      </div>
    )
  }
}

export default WrapperComponent(HoverCounter)
