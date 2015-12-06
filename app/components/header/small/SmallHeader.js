import React from 'react';
import {AppBar, Tabs, Tab, LeftNav, MenuItem, List, ListItem, ListDivider} from 'material-ui';
import Navigations from '../Navigations';

class SmallHeader extends React.Component {

    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
    }

    render() {
        return (
            <div>
                <LeftNav
                    docked={false}
                    style={{"overflow": "auto"}}
                    ref="leftNav"
                    header={<img src={this.props.navigationData.imageUrl}/>}
                    onChange={this._onLeftNavChange}>

                    <Navigations title={this.props.navigationData.title} navigations={this.props.navigationData.navigations}/>
                    <List subheader="Gemaakt door">
                        <ListItem key="1" primaryText="Easybird.be"/>
                        <ListItem key="2" primaryText="Cazamundo.be"/>
                    </List>
                </LeftNav>
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
    router: React.PropTypes.func.isRequired,
    navigationData: React.PropTypes.object
};

export default SmallHeader;