# Topics :
## How to use Hooks
    [Link to the post](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
* useState
* useEffect

* ### styles use css
- `import './style.css`
- style.css
`.btn{
    background-color: #0000ff;
    color:#ffffff;
}
`
## Use Form request

* ### styles use bootstrap from npm 
`import 'bootstrap/dist/css/bootstrap.css';`

## How to call api
## Router in reactjs
## Handling the events
## Normal function vs arraw functions
    `javascript
    ======== Normal function ==========================

    constructor(props)
    {
        super(props);
        this.state = {title: props.title};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked me..", this.state);
    }

    =========== or use arraw function like so ===========

    handleClick = ()=>{
        console.log("clicked me..", this.state);
    }

`

## Lifecycle 
### common :
* `componentDidMount`
* `componentWillUnmount`

### rest of the list
* `componentDidUpdate`
* `shouldComponentUpdate`
* `render`
* `getSnapshotBeforeUpdate`


# References :
- [Net Ninga](https://www.youtube.com/watch?v=rDVe6pmeAjo&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=12)
- [Bitfumes](https://www.youtube.com/watch?v=I6tbhNUU96Y&t=7310s)