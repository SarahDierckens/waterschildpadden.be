import React from 'react';
import {AppBar, Tabs, Tab, LeftNav, MenuItem} from 'material-ui';

class SmallHeader extends React.Component {

    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
    }

    render() {
        var menuItems = [
            { route: 'home', text: 'Waterschildpadden.be' },
            { type: MenuItem.Types.SUBHEADER, text: 'Info' },
            { route: 'aanschaf', text: 'Aanschaf' },
            { route: 'soorten', text: 'Soorten' },
            { route: 'huisvesting', text: 'Huisvesting' },
            { route: 'verzorging', text: 'Verzorging' },
            { type: MenuItem.Types.SUBHEADER, text: 'Gemaakt door' },
            {
                type: MenuItem.Types.LINK,
                payload: 'http://www.easybird.be',
                target: '_blank',
                text: 'Easybird.be'
            },
            {
                type: MenuItem.Types.LINK,
                payload: 'http://www.cazamundo.be',
                target: '_blank',
                text: 'Cazamundo.be'
            }
        ];

        return (
            <div>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this._onLeftNavChange}/>

                <AppBar title="Waterschildpadden.be" onLeftIconButtonTouchTap={this._handleClick}>

                </AppBar>
            </div>
        )
    }

    _onLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    }

    _handleClick(e) {
        e.preventDefault();

        // Show/Hide the LeftMenu
        this.refs.leftNav.toggle();
    }
}
;

SmallHeader.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default SmallHeader;