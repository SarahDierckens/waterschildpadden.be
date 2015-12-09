import React from 'react';
import {List, ListItem, ListDivider} from 'material-ui';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import AppActions from '../../dispatchers/app-actions'

class Navigations extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpdateSelectedIndex = this.handleUpdateSelectedIndex.bind(this);
        this.state = {
            selectedIndex: 0,
            selectedNavigationId: this.props.navigations[0].id
        }

    }

    handleUpdateSelectedIndex(e, index) {
        this.setState({selectedIndex: index});
    }

    handleOnTouchTap(event, navigation){
        AppActions.navigateTo(navigation);
        this.setState({
            selectedNavigationId: navigation.id
        })
    }

    mapNavigations(navigations) {
        var navigationsMap = navigations.map((navigation, index) => {
            return (
                <ListItem
                    key={index}
                    value={index + 1}
                    onTouchTap={this.handleOnTouchTap.bind(this, navigation)}
                    primaryText={navigation.title}
                    initiallyOpen= {this.state.selectedNavigationId === navigation.id}
                    nestedItems={navigation.listItems.map((subNavigation, index) => {
                        return (
                            <ListItem
                                key={index}
                                value={subNavigation.id}
                                primaryText={subNavigation.title} />
                        )
                    })}
                />
            )
        });


        return navigationsMap;
    }

    render() {
        var SelectableList = SelectableContainerEnhance(List);
        var valueLink = {
            value: this.state.selectedIndex,
            requestChange: this.handleUpdateSelectedIndex
        };
        var title = this.props.title;

        return (
            <SelectableList
                valueLink={valueLink}
                subheader={title}
            >
            {this.mapNavigations(this.props.navigations)}
            </SelectableList>
        )
    }
}
;

Navigations.propTypes = {
    navigations: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Navigations;