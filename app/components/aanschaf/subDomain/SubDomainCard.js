import React from 'react';
import ReactDOM from 'react-dom';
import CardMedia from 'material-ui/lib/card/card-media';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Card from 'material-ui/lib/card/card';

class SubDomainCard extends React.Component {

    constructor(props) {
        super(props);
    }

    //componentDidMount() {
    //    this.ensureVisible();
    //}
    //
    //componentDidUpdate() {
    //    this.ensureVisible();
    //}
    //
    //ensureVisible() {
    //    if (this.props.active) {
    //        this.props._scrollIntoView(ReactDOM.findDOMNode(this));
    //    }
    //}

    render() {
        var card = this.props.card;

        return (
            <div id={card.subDomain.path.subDomain}>
                <Card style={{marginBottom: "20px"}} initiallyExpanded={card.isExpanded} onExpandChange={this.props._onExpandChange.bind(this, card)}>
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
                </Card>
            </div>
        )
    }
}

SubDomainCard.contextTypes = {
    card: React.PropTypes.object,
    _onExpandChange: React.PropTypes.func,
    active: React.PropTypes.bool
};

export default SubDomainCard;