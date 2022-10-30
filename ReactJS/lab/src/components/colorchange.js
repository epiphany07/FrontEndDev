import React,{Component} from 'react'

class Demo extends Component{

    constructor(props){
        super(props);
            this.state={
                color:"black",
            }
    }

    setRed=()=>{
        this.setState({color:"red"})
    }

    setBlue=()=>{
        this.setState({color:"blue"})
    }

    setGreen=()=>{
        this.setState({color:"green"})
    }

    render(){
        return (
<div>
<h1 style={{color:this.state.color}}>This is a react app</h1>
<button onClick={this.setRed}>Red</button>
<button onClick={this.setBlue}>Blue</button>
<button onClick={this.setGreen}>Green</button>
</div>
        )
    }
}
export default Demo
