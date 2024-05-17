import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(){
        return{
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
      return(<h1>some thing went wrong </h1>)
    }
    else{
      return(<h1>{this.props.children}</h1>)
    }
  }

}

