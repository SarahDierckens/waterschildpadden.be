import React from 'react';
import {List, ListItem, ListDivider} from 'material-ui';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

class Navigations extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpdateSelectedIndex = this.handleUpdateSelectedIndex.bind(this);
        this.state = {selectedIndex: 0}

    }

    handleUpdateSelectedIndex(e, index) {
        this.setState({selectedIndex: index});
    }

    mapNavigations(navigations) {
        var navigationsMap = navigations.map((navigation, index) => {
            return (
                <ListItem
                    key={index}
                    value={index + 1}
                    primaryText={navigation.title}
                    initiallyOpen={navigation.selected}
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