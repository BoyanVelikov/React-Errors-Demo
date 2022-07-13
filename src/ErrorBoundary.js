import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(errorInfo) {
        console.log(`Error info: `, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <h2>Something went wrong!</h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;