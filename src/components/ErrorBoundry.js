import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state ={
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (<h1 className="f1" 
                style={{color: '#0ccac4'}}>
                Ooops! Something went wrong :( !
                </h1>
                );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;