
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Provider} from 'react-redux';
import App from './components/App';

// connect((store)=>{
//     return {
//         tasks: store
//     }
// }, <App />)

// class App extends React.Component {

//     constructor(props){
//         super(props);
//     }

//     render() { 
//         console.log(this.props);
//         return ( 
//             <div className="container">
//                 Hello
//             </div>
//          );
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'))