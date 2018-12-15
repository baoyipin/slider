import React from "react";
import SliderList from "./SliderList";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";

export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    go = (step)=>{
        let index = this.state.index+step;
        if (index > this.props.items.length){
            this.$ul.style.transitionDuration = "";
            this.$ul.style.left = 0;
            setTimeout(()=>{//等动画完成并且ul回到0再增加动画时间
                this.$ul.style.transitionDuration = this.props.speed+"s";
                index = 1;
                this.setState({index})
            },30);
            return
        }
        if (index<0){
            this.$ul.style.transitionDuration = "";
            this.$ul.style.left = this.props.items.length*-1*730+"px";
            setTimeout(()=>{//等动画完成并且ul回到0再增加动画时间
                this.$ul.style.transitionDuration = this.props.speed+"s";
                index = this.props.items.length-1;
                this.setState({index})
            },30);

            return
        }
        this.setState({
            index
        })
    };
    move=()=>{
       this.timer = setInterval(()=>{
           this.go(1)

        },this.props.delay*1000)
    };
    componentDidMount(){
        let {autoplay,delay}=this.props;
        if (autoplay){
             this.move();
        }
        this.container.addEventListener("mouseenter",()=>{
            clearTimeout(this.timer)
        });
        this.container.addEventListener("mouseleave",()=>{
            this.move()
        })
        this.$ul = this.refs.list.ul;
    }
    render(){

        return (
            <div className="container" ref={x=>{this.container=x}}>
                <SliderList
                    index={this.state.index}
                    items={this.props.items}
                    speed={this.props.speed} ref="list"/>
                {this.props.arrow?<SliderArrow go={this.go}/>:null}
                {this.props.dots?<SliderDots
                    items={this.props.items}
                    index={this.state.index}
                    go={this.go}/>:null}
            </div>
        )
    }
}