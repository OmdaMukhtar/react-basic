
import React from "react";

// function App({title}){
//     return <div><h1>{title}</h1></div>
// }

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {title: props.title};
    }

    render() {
        return <div><h1>{this.state.title}</h1></div>
    }
}

export default App;