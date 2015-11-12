import React from 'react';
import ResponsiveComponent from '../util/responsiveComponent';
import RaisedButton from 'material-ui/lib/raised-button';

class Home extends ResponsiveComponent {

    render() {
        return (
            <div>
                <div>Current window width: {this.state.windowWidth}</div>
                <p>{this.viewPort.viewPortSize}</p>
                <p>{this.viewPort.isLarge()}</p>
                <RaisedButton label="Default" />
            </div>
        )
    }
}
;

export default Home;