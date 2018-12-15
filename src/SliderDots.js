import React from "react";

export default class SliderDots extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="dots">
                {this.props.items.map((item,index)=>(
                    <span
                        key={index}
                        className={index === this.props.index||(this.props.index === this.props.items.length&&index===0)?"active":""}
                        onClick={()=>{
                            this.props.go(index-this.props.index)
                        }}></span>
                ))}
            </div>
        )
    }
}