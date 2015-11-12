import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';

class LargeHeader extends React.Component {

    constructor() {
        super();
        this._onChangeTabs = this._onChangeTabs.bind(this);
    }

    _onChangeTabs(e, key, payload) {
        this.context.router.transitionTo(payload.props.route)
    }

    render() {
        return (
            <AppBar title="Waterschildpadden.be" showMenuIconButton={false}>
                <Tabs onChange={this._onChangeTabs}>
                    <Tab label="Home" route="home" />
                    <Tab label="Aanschaf" route="aanschaf" />
                    <Tab label="Soorten" route="soorten" />
                    <Tab label="Huisvesting" route="huisvesting" />
                    <Tab label="Verzorging" route="verzorging" />
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