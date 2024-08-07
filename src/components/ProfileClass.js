import { Component } from "react";
import React from "react";


class Profile extends Component{

constructor(props){
  super(props);
console.log("constructor called"+this.props.heading)
  this.state ={
    count:0,
  };

  }

  componentDidMount(){
    console.log("component did mount")
  }

  componentDidUpdate(){
    console.log('component did update')
  }

  componentWillUnmount(){
    console.log('component will unmount')
  }

render() {
      return (
        <div>
          {console.log("render")+ this.props.heading}
          <h1>Profile class Component</h1>
          <h2>jai shree ram</h2>
          <h2>Name: {this.props.name}</h2>
          <h2>XYZ {this.props.xyz} </h2>
          <h2>Count: {this.state.count} </h2>
          <button onClick={(len)=>{
            this.setState({
                count:1
            })
          }}>change</button>
        </div>
      )
    }
}
export default Profile;