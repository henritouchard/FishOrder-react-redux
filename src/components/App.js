import React, { Component } from 'react';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';
import FishesList from './FishesList';

class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="fresh food" />
                    <FishesList />
                </div>
                <Order />
                <Inventory />
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         fishes: state.fish,
//         orders: state.order,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actionAddFish: (id, fish) => dispatch(actionAddFish(id, fish)),
//         actionLoadFishes: fishList => dispatch(actionLoadFishes(fishList)),
//         actionOrderFish: fishId => dispatch(actionOrderFish(fishId))
//     }
// }

export default(App);