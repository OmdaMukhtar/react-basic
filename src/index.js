import ReactDOM from "react-dom";
import React, {useState} from "react";



function NameForm(props){
    const [value, setValue] = useState();
    
    function handleChange(e){
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e){
        console.log(value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
    
}
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { value: 'default value' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event){
//         console.log("value = ", this.state.value);
//         event.preventDefault();
//     }

//     render() {
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //         <label>
        //             Name:
        //             <input type="text" value={this.state.value} onChange={this.handleChange} />
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        // );
//     }
// }

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//         );
//     }
// }


ReactDOM.render(
   <NameForm />,
    document.getElementById('root')
);