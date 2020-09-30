# Topics :

## Get start with react
0. ## JSX
    ```js
        import ReactDOM from "react-dom";
        import React from "react";

        const element = <h2>Hello Snso team </h2>

        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    ```

1. ## styles use css
    - ### Through style file
    ```js
        import './style.css
    ```
    - ### Style.css
    ```css
        .btn{
            background-color: #0000ff;
            color:#ffffff;
        }
    ```

2. ## Styles use bootstrap from npm 
    ```js
    import 'bootstrap/dist/css/bootstrap.css';
    ```

3. ## Components and Props
    - ### Through componant class base
    ```js
    class Welcome extends React.Component {
        render() {
        return <h1>Hello, {this.props.nackName}</h1>;
        }
    }
    ```

    - ### Through functional component base
    ```js
    function Welcome(props) {
        return <h1>{props.nackName}</h1>
    }
    ```

4. ## Lifecycle 
    ### common :
        * `componentDidMount`
        * `componentWillUnmount`

    ### rest of the list
        * `componentDidUpdate`
        * `shouldComponentUpdate`
        * `render`
        * `getSnapshotBeforeUpdate`


    #### Lifecycle Methods to a Class
    ```js

    ```
    #### Lifecycle Methods to a Functional Component
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



## Use Form request


## React Context

## How to use Hooks
* [Link to the post](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
* The most important thing in the hooks is these two methods :
* useState
* useEffect

## How to call api
## Router in reactjs
## Handling the events
## Normal function vs arraw functions

======== Normal function ==========================



# My thought
- by using React Hook I thing there is no need for a statage mangement ?!
- Componenet functional base it's better than componenet class base ?
- Your thought reactjs vs vuejs
- Redux vs Vuex

# Some tipics that I dit't find a time to know it:
- Redux
- What is .tsx

# References :
- [Net Ninga](https://www.youtube.com/watch?v=rDVe6pmeAjo&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=12)
- [Bitfumes](https://www.youtube.com/watch?v=I6tbhNUU96Y&t=7310s)