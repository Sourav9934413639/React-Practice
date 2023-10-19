import React, {Component} from 'react'
import WrapperComponent from './WrapperComponent';
class ClickCounter extends Component {
  
  render() {

    const {count,clickHandler,name}=this.props;

    return (
      <div>
        <button onClick={clickHandler}>Click by {name}-{count} times</button>
      </div>
    )
  }
}

export default WrapperComponent(ClickCounter)
