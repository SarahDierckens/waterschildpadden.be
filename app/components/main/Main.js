import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../header/Header';
import CssTheme from '../../config/CssTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class Main extends React.Component {

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(CssTheme)
        };
    }

    render() {
        var color = CssTheme.palette.primary2Color;

        return (
            <div style={{backgroundColor: color}}>
                <Header />
                <RouteHandler {...this.props}/>
            </div>
        )
    }
}
;

Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Main;