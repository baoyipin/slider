import React from "react";

export default class SliderArrow extends React.Component{
    constructor(){
        super()
    }
    goBack=()=>{
        this.props.go(-1)
    };
    goForward=()=>{
        this.props.go(1)
    };
    render(){
        return (
            <div className="arrow">
                <span onClick={this.goBack}>&lt;</span>
                <span onClick={this.goForward}>&gt;</span>
            </div>
        )
    }
}