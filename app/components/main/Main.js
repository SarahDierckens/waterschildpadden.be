import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../header/Header';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <RouteHandler {...this.props}/>
            </div>
        )
    }
}
;

export default Main;