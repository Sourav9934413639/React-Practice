import React, { Component } from 'react'

const WrapperComponent=(OriginalComponent)=>{
    class NewComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
            this.clickHandler=this.clickHandler.bind(this);
          }
          clickHandler=()=>{
              this.setState({count:this.state.count+1})
            
          }
        render() {
            const {count}=this.state;
          return (
            <OriginalComponent count={count} clickHandler={this.clickHandler} {...this.props}/>
          )
          
        }
      }
      return NewComponent;
}

export default WrapperComponent
