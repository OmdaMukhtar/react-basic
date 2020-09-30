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


8. ### React Context
    ```js
        import React, {createContext, Component} from 'react';

        export const SongsContext = createContext();

        class SongsContextProvider extends Component {
            state = { 
                songs: [
                    {id:12, name: 'Ali'},
                    {id:13, name: 'Kali'},
                    {id:14, name: 'Omer'},
                ]
            }
            addSong =()=>{
                var joined = this.state.songs.concat({id:122, name: 'Ommm'});
                this.setState({ songs: joined })
            }

            render() { 
                return ( 
                    <SongsContext.Provider value={{songs:this.state.songs, addSong: this.addSong}}>
                        {this.props.children}
                    </SongsContext.Provider>
                );
            }
        }
        
        export default SongsContextProvider;
    ```

    ```js
        class ImplementHook extends Component {
            static contextType = SongsContext;
            
            render() { 
                const {songs, addSong} = this.context;
                return ( 
                    <div>
                        <ul>
                            {songs.map(song => {
                                return (
                                    <li key={song.id}>{song.name}</li>
                                );
                            })}
                        </ul>
                        <button onClick={addSong}>add newSong</button>
                    </div>
                );
            }
        }
    ```

    ```jsx
        ReactDOM.render(
            <SongsContextProvider>
                <ImplementHook />
            </SongsContextProvider>,
            document.getElementById('root')
        );
    ```

8. ### Hook with context
    ```js
        import React, {useContext} from 'react';
        
        const ImplementHook = () => {
            const {songs, addSong} = useContext(SongsContext);

            return ( 
                <div>
                    <ul>
                        {songs.map(song => {
                            return (
                                <li key={song.id}>{song.name}</li>
                            );
                        })}
                    </ul>
                    <button onClick={addSong}>add newSong</button>
                </div>
            );
        }
    ```

9. ### How to use Hooks
    * [Link to the post](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
    * The most important thing in the hooks is these three methods :
        - useState
        - useEffect
        - useContext

    * Implement Hooks functions like so:
        ```js
            const ImplementHook = () => {
                const [songs, setSongs] = useState([
                    {id:1, name: 'Otwel'},
                    {id:2, name: 'Omda'},
                    {id:3, name: 'Nahid'},
                ]);

                const [age, setAge] = useState(10);

                useEffect(()=>{
                    console.log('effect hooks', songs);
                }, [songs]);

                
                useEffect(()=>{
                    console.log('effect hooks', age);
                }, [age]);


                const handlClick =()=>{
                    setSongs([...songs, {id:4, name:'new song'}]);
                }

                return ( 
                    <div>
                        <ul>
                            {songs.map(song => {
                                return (
                                    <li key={song.id}>{song.name}</li>
                                );
                            })}
                        </ul>

                        <button onClick={handlClick}>add newSong</button>
                        <button onClick={() => {document.title = setAge(age+1)}}>add age</button>
                    </div>
                );
            }
        ```

        ```jsx
            ReactDOM.render(
            <ImplementHook />,
                document.getElementById('root')
            );
        ```
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