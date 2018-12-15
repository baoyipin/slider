import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import "./index.less";
import a from "./imgs/banner1.jpg";
import b from "./imgs/banner2.jpg";
import c from "./imgs/banner3.jpg";
let items = [{src:a},{src:b},{src:c}];

ReactDOM.render(<Slider
    delay={2}
    speed={0.5}
    autoplay={true}
    dots={true}
    arrow={true} items={items}/>,window.root);