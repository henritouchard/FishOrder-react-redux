import React from 'react';
// import { formatPrice } from '../helpers';
import Fish from './Fish';
import { actionOrderFish} from '../actions'
import { connect } from 'react-redux';

class FishesList extends React.Component {

    addToOrder = (key) => {
        this.props.actionOrderFish(key)
    }

    render() {
        return (
            <ul className="list-of-fishes">
                {
                    Object
                        .keys(this.props.fishes)
                        .map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.props.fishes[key]} />)
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        fishes: state.fish,
        orders: state.order,
    };
}

function mapDispatchToProps(dispatch){
    return {
        actionOrderFish: fishId => dispatch(actionOrderFish(fishId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishesList);