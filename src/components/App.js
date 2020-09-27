
import React from "react";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {title: props.title};
    }

    handleClick = ()=>{
        console.log("clicked me..", this.state);
    }

    render() {
        return <div className="justify-content-center container">
            <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
        </div>
    }
}

export default App;