import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import SubDomainCard from './subDomain/SubDomainCard';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Card from 'material-ui/lib/card/card';

class Aanschaf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Aanschaf",
            subTitle: null,
            imageUrl: "http://lorempixel.com/600/337/nature/",
            teaserTitle: "Wil je graag een schildpad in je huis of tuin?",
            teaserText: "Denk dan eerst goed na of je je nieuwe huisdier wel kan bieden wat het verdient, want een schildpad is veel meer dan een hebbedingetje." +
            " Informeer ook goed wat voor dier je in huis neemt. Welke soort schildpad is het? Neem ik een mannetje of een vrouwtje?",
            cards: []
        }
    }

    init(subDomain) {
        var cards = this.getCards();
        this.changeCardsViewState(cards, subDomain);
        this.setState({
            cards: cards
        });
    }

    changeCardsViewState(cards, subDomain) {
        cards.forEach(card => {
                if (card.subDomain.path.subDomain === subDomain) {
                    card.isExpanded = true;
                } else {
                    card.isExpanded = false;
                }
            }
        );
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.router = this.context.router;
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.init(this.props.params.subDomain);
    }

    componentWillReceiveProps(newProps) {
        this.init(newProps.params.subDomain);
    }

    scrollElementIntoViewIfNeeded(domNode) {
        var containerDomNode = React.findDOMNOde(this);
        // Determine if `domNode` fully fits inside `containerDomNode`.
        // If not, set the container's scrollTop appropriately.
    }

    _onExpandChange(card, isExpanded) {
        if (isExpanded) {
            this.router.transitionTo("aanschafSubDomain", card.subDomain.path);
        }
    }

    renderCards() {
        return this.state.cards.map((card, index) =>
            <SubDomainCard
                active={card.subDomain.path.subDomain === this.props.params.subDomain}
                card= {card}
                key= {index}
                _onExpandChange= {this._onExpandChange.bind(this, card)}
                _scrollIntoView={this.scrollElementIntoViewIfNeeded}
            />
        )
    }

    render() {
        console.log("start render");
        var cards = this.renderCards();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-9">
                        <div className="row">
                            <div className="col-sm-12">
                                <Card>
                                    <CardMedia
                                        overlay={
                                            <CardTitle
                                                title={this.state.title}
                                                subtitle={this.state.subTitle}
                                            />
                                            }>
                                        <img src={this.state.imageUrl}/>
                                    </CardMedia>
                                    <CardTitle
                                        title={this.state.teaserTitle}/>
                                    <CardText>
                {this.state.teaserText}
                                    </CardText>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            {cards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    getCards() {
        return [
            {
                title: `Voor je een schildpad in huis neemt`,
                subTitle: "Kan je een schildpadje kiezen als prijs op de kermis? Denk eerst even na, want een schildpad is geen goudvis.",
                imageUrl: "temp_images/schildpadden_example.gif",
                featured: true,
                parentDomain: {
                    route: "aanschaf"
                },
                subDomain: {
                    route: "aanschafSubDomain",
                    path: {
                        subDomain: "voorbereiding"
                    }
                }
            },
            {
                title: "Welke schildpad kies ik?",
                subTitle: "Zoek je een mannetje of wil je liever een vrouwtje?",
                imageUrl: "temp_images/aanschaf.gif",
                parentDomain: {
                    route: "aanschaf"
                },
                subDomain: {
                    route: "aanschafSubDomain",
                    path: {
                        subDomain: "geslacht"
                    }
                }
            },
            {
                title: "Tips bij aanschaf",
                subTitle: "Koop je een kat in een zak of weet je liever wat je koopt? Waar kan je op letten wanneer je een schildpad aanschaft?",
                imageUrl: "temp_images/test_size.png",
                parentDomain: {
                    route: "aanschaf"
                },
                subDomain: {
                    route: "aanschafSubDomain",
                    path: {
                        subDomain: "tips"
                    }
                }
            },
            {
                title: "Adopteer een schildpad",
                subTitle: "Kijk of je jouw droomschildpad bij een andere particulier kan aanschaffen.",
                imageUrl: "http://lorempixel.com/600/337/nature/",
                featured: true,
                parentDomain: {
                    route: "aanschaf"
                },
                subDomain: {
                    route: "aanschafSubDomain",
                    path: {
                        subDomain: "adoptie"
                    }
                }
            }
        ]
    }
}
;

Aanschaf.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Aanschaf;