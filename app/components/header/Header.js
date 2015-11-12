import React from 'react';
import ResponsiveComponent from '../util/responsiveComponent';
import LargeHeader from './LargeHeader'
import SmallHeader from './SmallHeader'

class Header extends ResponsiveComponent {

    render() {
        if (this.viewPort.isLarge()) {
            return <LargeHeader />
        } else {
            return <SmallHeader />;
        }

    }
}
;

export default Header;