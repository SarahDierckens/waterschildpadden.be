import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import Card from 'material-ui/lib/card/card';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar'

class Aanschaf extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Aanschaf",
            subTitle: null,
            imageUrl: "http://lorempixel.com/600/337/nature/",
            teaserTitle: "Wil je graag een schildpad in je huis of tuin?",
            teaserText: "Denk dan eerst goed na of je je nieuwe huisdier wel kan bieden wat het verdient, want een schildpad is veel meer dan een hebbedingetje." +
            " Informeer ook goed wat voor dier je in huis neemt. Welke soort schildpad is het? Neem ik een mannetje of een vrouwtje?",
            cards: [
                {
                    title: `Voor je een schildpad in huis neemt`,
                    subTitle: "Kan je een schildpadje kiezen als prijs op de kermis? Denk eerst even na, want een schildpad is geen goudvis.",
                    route: "voorbereiding",
                    imageUrl: "temp_images/schildpadden_example.gif",
                    featured: true
                },
                {
                    title: "Welke schildpad kies ik?",
                    subTitle: "Zoek je een mannetje of wil je liever een vrouwtje?",
                    route: "geslacht",
                    imageUrl: "temp_images/aanschaf.gif"
                },
                {
                    title: "Tips bij aanschaf",
                    subTitle: "Koop je een kat in een zak of weet je liever wat je koopt? Waar kan je op letten wanneer je een schildpad aanschaft?",
                    route: "tips",
                    imageUrl: "temp_images/test_size.png"
                },
                {
                    title: "Adopteer een schildpad",
                    subTitle: "Kijk of je jouw droomschildpad bij een andere particulier kan aanschaffen.",
                    route: "adoptie",
                    imageUrl: "http://lorempixel.com/600/337/nature/",
                    featured: true
                }
            ]
        }
    }

    componentWillMount() {
        this.router = this.context.router;
    }

    _onChangeTabs(card, isExpanded) {
        this.router.transitionTo(card.route)
    }

    render() {
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
                            {this.state.cards.map((card, index) =>
                                <Card style={{marginBottom: "20px"}} key={index} initiallyExpanded={false} onExpandChange={this._onChangeTabs.bind(this, card)}>
                                    <CardHeader
                                        title={card.title}
                                        avatar={"http://lorempixel.com/100/100/nature/"}
                                        actAsExpander={true}
                                        showExpandableButton={true}>
                                    </CardHeader>
                                    <CardText>
                                        {card.subTitle}
                                    </CardText>
                                    <CardText expandable={true}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    </CardText>
                                </Card>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

Aanschaf.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Aanschaf;