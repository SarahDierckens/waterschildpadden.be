import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';

class LargeHeader extends React.Component {

    _handleTouchTap() {
        alert('worked!');
    }

    _goToAanschaf(e) {
        console.log("check");
        var router = this.context.router;
        router.transitionTo('aanschaf', {totalUsers: "test"});
    }

    render() {
        return (
            <AppBar title="Waterschildpadden.be" showMenuIconButton={false}>
                <Tabs>
                    <Tab label="Home" />
                    <Tab label="Aanschaf"  />
                    <Tab label="Soorten" />
                    <Tab label="Huisvesting" />
                    <Tab label="Verzorging" />
                </Tabs>
            </AppBar>
        )
    }
}
;

LargeHeader.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default LargeHeader;