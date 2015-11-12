import React from 'react';
import ViewPort from './viewPort';

class ResponsiveComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
        this.viewPort = new ViewPort(this.state.windowWidth);
    }

    handleResize(event) {
        this.viewPort = new ViewPort(window.innerWidth);
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
}
;

export default ResponsiveComponent;