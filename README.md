# Topics :

## Get start with react
0. ### JSX
    ```js
        import ReactDOM from "react-dom";
        import React from "react";

        const element = <h2>Hello developers team :) </h2>

        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    ```

1. ### styles use css
    - #### Through style file
        ```js
            import './style.css
        ```
    - #### Style.css
        ```css
            .btn{
                background-color: #0000ff;
                color: #ffffff;
            }
        ```

2. ### Styles use bootstrap from npm 
    - npm install bootstrap
    ```js
        import 'bootstrap/dist/css/bootstrap.css';
    ```

3. ### Components and Props
    - #### Through componant class base
        ```js
            class Welcome extends React.Component {
                render() {
                    return <h1>Hello, {this.props.nackName}</h1>;
                }
            }
        ```

    - #### Through functional component base
        ```js
            function Welcome(props) {
                return <h1>{props.nackName}</h1>
            }
        ```

4. ### Lifecycle 
    - #### common :
        * componentDidMount
        * componentWillUnmount

    - #### rest of the list
        * componentDidUpdate
        * shouldComponentUpdate
        * render
        * getSnapshotBeforeUpdate


    - #### Lifecycle Methods Through a Component Class
        ```js
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
        ```
        ```jsx
            ReactDOM.render(
                <ImplementLifeCycle />,
                document.getElementById('root')
            );

        ```
    - #### Lifecycle Methods through a Functional Component
        * using context
        ```js

        ```
        
        * using Hooks
        ```js

        ```

5. ### Handling Events
    - #### Through Class Component
        ```js
            constructor(props)
            {
                super(props);
                this.state = {title: props.title};
                this.handleClick = this.handleClick.bind(this);
            }

            handleClick() {
                console.log("clicked me..", this.state);
            }
        ```
        =========== or use arraw function like so ===========
        ```js
            handleClick = ()=>{
                console.log("clicked me..", this.state);
            }
        ```

        ```jsx
            render() { 
                return ( 
                    <div>
                        <button onClick={this.handleClick} >Click Me</button>
                    </div>
                );
            }
        ```

    - #### Through Functional Component
        ```js
            function Welcome() {
                function handleClick(e) {
                    e.preventDefault();
                    console.log('The link was clicked.');
                }

                return (
                    <a href="#" onClick={handleClick}>
                    Click me
                    </a>
                );
            }
        ```

6. ### Forms
    ```js
        class NameForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {value: ''};

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }

            handleChange(event) {
                this.setState({value: event.target.value});
            }

            handleSubmit(event) {
                alert('A name was submitted: ' + this.state.value);
                event.preventDefault();
            }

            render() {
                return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                );
            }
        }
    ```
    - Exercies :
        convert newform component class to the functional component class

7. ### Router in reactjs
    ```js

    ```


8. ### React Context
    ```js

    ```

9. ### How to use Hooks
    * [Link to the post](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
    * The most important thing in the hooks is these two methods :
        - useState
        - useEffect

## My thought
    - by using React Hook I thing there is no need for a statage mangement ?!
    - Componenet functional base it's better than componenet class base ?
    - Your thought reactjs vs vuejs
    - Redux vs Vuex

## Some tipics that I dit't find a time to know it:
    - Redux
    - What is .tsx
    - How to call api


## References
    - [Net Ninga](https://www.youtube.com/watch?v=rDVe6pmeAjo&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=12)
    - [Bitfumes](https://www.youtube.com/watch?v=I6tbhNUU96Y&t=7310s)