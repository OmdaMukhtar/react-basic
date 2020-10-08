* ## [Topics :](#)
  - [Get start with react](#get-start-with-react)
    1. [Requirements](#requirements)
    2. [Installation](#installation)
    3. [JSX](#jsx)
    4. [Styles](#Styles)
    5. [Components and Props](#components-and-props)
    6. [Lifecycle](#lifecycle)
    7. [Handling Events](#eandling-events)
    8. [Forms](#forms)
    9. [React Context](#react-context)
    10. [How to use Hooks](#how-to-use-hooks)
    11. [Hook with context](#hook-with-context)
    12. [React Router](#react-router)
    13. [Reactjs project structure](#reactjs-project-structure)
  - [My thought](#my-thought)
  - [Some topics that I dit not find a time to know it](#some-topics-that-I-dit-not-find-a-time-to-know-it)
  - [Referencies](#referencies)
  


* ## Get start with react
  1. ### Requirements
      - Node >= 8.10 
      - NPM >= 5.6

  2. ### Installation
      - npx create-react-app my-app
      - cd my-app
      - npm start

  3. ### JSX
      ```js
          import ReactDOM from "react-dom";
          import React from "react";

          const element = <h2>Hello developers team :) </h2>

          ReactDOM.render(
              element,
              document.getElementById('root')
          );
      ```

  4. ### Styles
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

      - ### Styles use bootstrap from npm 
          - npm install bootstrap
          ```js
              import 'bootstrap/dist/css/bootstrap.css';
          ```

  5. ### Components and Props
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

  6. ### Lifecycle 
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
          - using Hooks

  7. ### Handling Events
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

  8. ### Forms
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
      ```
      ```jsx
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


  9. ### React Context
      - ### Examples
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

      - #### Cosume multi context
          ```js
              class MyComponent extends Component {
                  render() { 
                      return (  
                          <FoodContext.Consumer>{(foodContext) => (
                              <SongContext.Consumer>{(songsContext)=> {
                                  const { isFood, changeStatus } = foodContext;
                                  const { songs } = songsContext;

                                  return (
                                      <div>
                                          <h1>Hello developers </h1>
                                          <h3>Food : {isFood ? 'true' : 'false'}</h3>
                                          <button onClick={changeStatus}>change status</button>
                                          <ul>
                                              {songs.map(song => {
                                                  return (
                                                      <li key={song.id}>{song.name}</li>
                                                  )
                                              })}
                                          </ul>
                                      </div>
                                  )
                              }}</SongContext.Consumer>
                          )}</FoodContext.Consumer>
                      );
                  }
              }
          ```

      - #### Use context with functional component
          ```js
              const MyComponent = () => {
                  const {songs} = useContext(SongContext);
                  const {changeStatus, isFood} = useContext(FoodContext);
                  return ( 
                      <div>
                          <h1>Hello developers </h1>
                          <h3>Food : {isFood ? 'true' : 'false'}</h3>
                          <button onClick={changeStatus}>change status</button>
                          <ul>
                              {songs.map(song => {
                                  return (
                                      <li key={song.id}>{song.name}</li>
                                  )
                              })}
                          </ul>
                      </div>
                  );
              }
          ```

  10. ### How to use Hooks
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
                      {id:3, name: 'Jhon'},
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

  11. ### Hook with context
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
  12. ### React Router
      - #### common elements
        - BrowserRouter
        - Link
        - Route
        - NavLink
      
      - #### Example
          ```js
              const NavBar = () => {
                  return ( 
                      <div>
                          <ul>
                              <li><Link to="/home">Home</Link></li>
                              <li><Link to="/about" >About us </Link></li>
                          </ul>
                          
                          <Switch>
                              <Route path="/home" component={Home}></Route>
                              <Route path="/aboutd" component={About}></Route>
                          </Switch>
                      </div>
                  );
              }
          ```
          
  13. ### Reactjs project structure
      - #### Example
          ```bash
              .
              |-src
                  |- components
                  |   |-component-name-folder
                  |       |-component-name.js
                  |       |-component-name.sass
                  |       |-component-name.styles.js
                  |       |-component-name-test.js
                  |       |-index.js
                  |-routes
                      |-index.js
                  |-index.js

          ```
* ## My thought
    - by using React Hook I thing there is no need for a statage mangement ?!
    - Componenet functional base it's better than componenet class base ?
    - Your thought reactjs vs vuejs
    - Redux vs Vuex

* ## Some topics that I dit not find a time to know it
    - Redux
    - What is .tsx
    - Reducers
    - How to call api

* ## Referencies
  - [React Documentation](https://reactjs.org/docs/getting-started.html)
  - [Bitfumes](https://www.youtube.com/watch?v=I6tbhNUU96Y&t=7310s)
  - [Net Ninga (Context and Hooks)](https://www.youtube.com/watch?v=rDVe6pmeAjo&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=12)
  - [Reactjs Router](https://reactrouter.com/web/guides/quick-start)
  - [React Structure Folders](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)

  - [Back](#topics)
