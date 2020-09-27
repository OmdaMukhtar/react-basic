
import React from "react";

// function App({title}){
//     return <div><h1>{title}</h1></div>
// }
import '../assets/style.css';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {title: props.title};
    }

    handleClick() {
        console.log("clicked me..");
    }

    render() {
        return <div>
            <button className="btn" onClick={this.handleClick}>Click Me</button>
        </div>
    }
}

export default App;