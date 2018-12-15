import React from "react";

export default class SliderList extends React.Component{
    constructor(){
        super()
    }
    render(){
        let style = {
            width:(this.props.items.length+1)*730+"px",
            left:this.props.index*(-730)+"px",
            transition:this.props.speed+"s"
        };
        return (
            <ul style={style} ref={x=>{this.ul=x}}>
                {this.props.items.map((item,index)=>(
                    <li><img src={item.src}/></li>
                ))}
                <li><img src={this.props.items[0].src} /></li>
            </ul>
        )
    }
}