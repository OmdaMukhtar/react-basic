# Topics :

## Get start with react
* JSX

```javascript

import ReactDOM from "react-dom";
import React from "react";

const element = <h2>Hello Snso team </h2>

ReactDOM.render(
    element,
    document.getElementById('root')
);

```

1. ### styles use css
- ```import './style.css```
- style.css
``css
.btn{
    background-color: #0000ff;
    color:#ffffff;
}
`
2. ### styles use bootstrap from npm 
```import 'bootstrap/dist/css/bootstrap.css'```;


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
```javascript

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
```javascript
handleClick = ()=>{
    console.log("clicked me..", this.state);
}
```

## Lifecycle 
### common :
* `componentDidMount`
* `componentWillUnmount`

### rest of the list
* `componentDidUpdate`
* `shouldComponentUpdate`
* `render`
* `getSnapshotBeforeUpdate`

# My thought
- by using React Hook I thing there is no need for a statage mangement ?!
- Componenet functional base it's better than componenet class base ?
- Your thought reactjs vs vuejs
- Redux vs Vuex

# Something that i dit't find a time to know it:
- Redux
- What is .tsx

# References :
- [Net Ninga](https://www.youtube.com/watch?v=rDVe6pmeAjo&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=12)
- [Bitfumes](https://www.youtube.com/watch?v=I6tbhNUU96Y&t=7310s)