import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

class Aanschaf extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Aanschaf",
            subTitle: "Wil je graag een schildpad in je huis of tuin?",
            imageUrl: "http://lorempixel.com/600/337/nature/",
            teaserTitle: "Wil je graag een schildpad in je huis of tuin?",
            teaserText: "Denk dan eerst goed na of je je nieuwe huisdier wel kan bieden wat het verdient, want een schildpad is veel meer dan een hebbedingetje. Informeer ook goed wat voor dier je in huis neemt. Welke soort schildpad is het? Neem ik een mannetje of een vrouwtje?"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col s12 l9">
                        <CardMedia
                            overlay={
                                <CardTitle
                                    title={this.state.title}
                                    subtitle={this.state.subTitle}/>
                                }>
                            <img src={this.state.imageUrl}/>
                        </CardMedia>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l9">
                        <div className="col s12">
                            <h5>{this.state.teaserTitle}</h5>
                        </div>
                        <div className="col s12">
                            <h6>{this.state.teaserText}</h6>
                        </div>
                    </div>
                </div>
                <RaisedButton label="Aanschaf" />
            </div>
        )
    }
}
;

export default Aanschaf;