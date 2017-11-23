import React from 'react';
import { formatPrice } from '../helpers';
import { connect } from 'react-redux';

class Order extends React.Component {

    renderOrder = (key) => {

        const fish = this.props.fishes[key];
        const count = this.props.orders[key];
        if (!fish || fish.status === 'unavailable') {
            return <li key={key}>Sorry, {fish ? fish.name : 'fish '} is no longer available</li>
        }
        return (
            <li key={key}>
                <span>{count}lbs {fish.name}</span>
                <span className="price">{formatPrice(count * fish.price)}</span>
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.orders);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.orders[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price || 0)
            }
            return prevTotal;
        }, 0)
        return (
            <div className="order-wrap">
                <h2>Your order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total"></li>
                    <strong>Total : </strong>
                    {formatPrice(total)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        fishes: state.fish,
        orders: state.order,
    };
}

export default connect(mapStateToProps)(Order);