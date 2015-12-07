import React from 'react';
import ResponsiveComponent from '../util/responsiveComponent';
import LargeHeader from './large/LargeHeader'
import SmallHeader from './small/SmallHeader'

class Header extends ResponsiveComponent {

    render() {
        var navigationData = this.getNavigations();
        if (this.viewPort.isLarge()) {
            return <LargeHeader navigationData={navigationData}/>
        } else {
            return <SmallHeader navigationData={navigationData}/>;
        }
    }

    getNavigations() {
        var aanschafNav = {
            id: 'aanschaf',
            type: 'PRIMARY',
            title: 'Aanschaf',
            listItems: [{
                id: 'voorbereiding',
                type: 'SECONDARY',
                parent: 'aanschaf',
                title: 'Voorbereiding'
            }, {
                id: 'geslacht',
                type: 'SECONDARY',
                parent: 'aanschaf',
                title: 'Geslacht'
            }, {
                id: 'tips',
                type: 'SECONDARY',
                parent: 'aanschaf',
                title: 'Tips'
            }, {
                id: 'adoptie',
                type: 'SECONDARY',
                parent: 'aanschaf',
                title: 'Adoptie'
            }]
        };
        var soortenNav = {
            id: 'soorten',
            type: 'PRIMARY',
            title: 'Soorten',
            listItems: [
                {
                    id: 'roodwang',
                    type: 'SECONDARY',
                    parent: 'soorten',
                    title: 'Roodwang'
                },
                {
                    id: 'geelwang',
                    type: 'SECONDARY',
                    parent: 'soorten',
                    title: 'Geelwang'
                },
                {
                    id: 'geelbuik',
                    type: 'SECONDARY',
                    parent: 'soorten',
                    title: 'Geelbuik'
                },
                {
                    id: 'andere',
                    type: 'SECONDARY',
                    parent: 'soorten',
                    title: 'Andere soorten'
                }]
        };
        var huisvestingNav = {
            id: 'huisvesting',
            type: 'PRIMARY',
            title: 'Huisvesting',
            listItems: [
                {
                    id: 'paludarium',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Het paludarium'
                },
                {
                    id: 'eiland',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Het eiland'
                },
                {
                    id: 'filteren',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Filteren'
                },
                {
                    id: 'zon',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Zon-en ander licht'
                },
                {
                    id: 'temperatuur',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Temperatuur'
                },
                {
                    id: 'gluren',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Gluren bij de buren'
                },
                {
                    id: 'vijver',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Van mini-paradijs tot vijver'
                },
                {
                    id: 'plaats',
                    type: 'SECONDARY',
                    parent: 'huisvesting',
                    title: 'Waar plaats je jouw aquarium?'
                }
            ]
        };
        var verzorgingNav = {
            id: 'verzorging',
            type: 'PRIMARY',
            title: 'Verzorging',
            listItems: [
                {
                    id: 'voeding',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'De voeding'
                },
                {
                    id: 'gedrag',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'Gedrag'
                },
                {
                    id: 'interactie',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'Jij en je schildpad, de interactie'
                },
                {
                    id: 'winterslaap',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'Winterslaap'
                },
                {
                    id: 'kweken',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'kweken'
                },
                {
                    id: 'ziektes',
                    type: 'SECONDARY',
                    parent: 'verzorging',
                    title: 'ziektes'
                }
            ]
        };
        var easybird = {
            id: 'easybird',
            type: 'LINK',
            title: 'Easybird.be',
            url: 'http://www.easybird.be'
        };
        var cazamundo = {
            id: 'cazamundo',
            type: 'LINK',
            title: 'Cazamundo.com',
            url: 'http://www.cazamundo.com'
        };

        return {
            title: 'Waterschildpadden.be',
            imageUrl: 'http://www.wezooz.be/gallery/stills/habitat-schildpad.jpg',
            navigations: [
                aanschafNav,
                soortenNav,
                huisvestingNav,
                verzorgingNav
            ],
            credentials: {
                title: 'Gemaakt door',
                navigations: [
                    easybird,
                    cazamundo
                ]
            }
        };
    }
}
;

export default Header;