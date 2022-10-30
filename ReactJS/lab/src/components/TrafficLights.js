import { Component } from "react";
import "../css/trafficlights.css";
export class TrafficLights extends Component{
    constructor(props){
        super(props);
        this.state={
            showRed:true,
            showYellow:false,
            showGreen:false,
        };
    }
    componentDidMount(){
        setTimeout( () => {
            this.setState({showRed:false,showYellow:true,showGreen:false});
        },4000 )
        
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.showYellow){
            setTimeout(()=>{
                this.setState({
                    showRed:false,showYellow:false,showGreen:true
                });
            },4000)
        }
        if(this.state.showGreen){
            setTimeout(()=>{
                this.setState({
                    showRed:true,showYellow:false,showGreen:false
                });
            },4000)
        }
        if(this.state.showRed){
            setTimeout(()=>{
                this.setState({
                    showRed:false,showYellow:true,showGreen:false
                });
            },4000)
        }
    }
    render(){
        return (
            <div> 
                <div className={this.state.showRed ? "red" : "circle"}/>
                <div className={this.state.showYellow ? "yellow" : "circle"}/>
                <div className={this.state.showGreen ? "green" : "circle"}/>
            </div>
        );
    }  
    
}
export default TrafficLights;