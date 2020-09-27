# Topics :
## How to use Hooks
    [Link to the post](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)
## How to call api
## Router in reactjs
## Handling the events
## Normal function vs arraw functions
    `
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