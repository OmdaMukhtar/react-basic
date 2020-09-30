import ReactDOM from "react-dom";
import React, {Component} from "react";


class MyImage extends Component {
    constructor(props) {
        super(props);
        console.log('inital component');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillUnmount(){
        console.log('component destroy');
    }

    render() { 
        return ( 
            <div>
                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"/>
            </div>
         );
    }
}
 
class ImplementLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false }
    }
    showImage = ()=>{
        this.setState({isShow: !this.state.isShow});
    }

    render() { 
        return ( 
            <div >
                <button onClick={this.showImage}>show an image</button>
                {this.state.isShow ? <MyImage /> : null}
            </div>
        );
    }
}
 

ReactDOM.render(
   <ImplementLifeCycle />,
    document.getElementById('root')
);