import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import Card from 'material-ui/lib/card/card';
import FlatButton from 'material-ui/lib/flat-button';

class Aanschaf extends React.Component {

  constructor() {
    super();
    this._onChangeTabs = this._onChangeTabs.bind(this);
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
          imageUrl: "http://lorempixel.com/600/337/nature/",
          featured: true
        },
        {
          title: "Welke schildpad kies ik?",
          subTitle: "Zoek je een mannetje of wil je liever een vrouwtje?",
          route: "geslacht",
          imageUrl: "http://lorempixel.com/600/337/nature/"
        },
        {
          title: "Tips bij aanschaf",
          subTitle: "Koop je een kat in een zak of weet je liever wat je koopt? Waar kan je op letten wanneer je een schildpad aanschaft?",
          route: "tips",
          imageUrl: "http://lorempixel.com/600/337/nature/"
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

  _onChangeTabs(e, key, payload) {
    debugger;
    this.context.router.transitionTo(payload.props.route)
  }

  render() {
    //TODO take the height of the heighest card
    var minimumHeight = "320 px";
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-9">
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
          <div className="col-sm-12 col-lg-9">
            <div className="row">
              {this.state.cards.map((card, index) =>
                <div className="col-xs-12 col-sm-6" key={index}>
                  <Card style={{marginBottom: "10px", minHeight: minimumHeight}}>
                    <CardMedia
                      overlay={
                                <CardTitle
                                    title={card.title}
                                    />
                                }>
                      <img src={card.imageUrl}/>
                    </CardMedia>
                    <CardText>
                      {card.subTitle}
                    </CardText>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
;

export default Aanschaf;