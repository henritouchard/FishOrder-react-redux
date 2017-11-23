import React from 'react';
import AddFishForm from './AddFishForm'
import { connect } from 'react-redux';
import { actionAddFish, actionLoadFishes } from '../actions';
import sampleFishes from '../sample-fishes';

class Inventory extends React.Component {

    addFish = (fish) => {
        //update state
        const timestamp = Date.now();
        //setState
        this.props.actionAddFish(`fish-${timestamp}`, fish);
    }

    loadSamples = () => {
        this.props.actionLoadFishes(sampleFishes);
    }

     render(){
        return (
            <div>
                <h2>Inventory</h2>
                    <AddFishForm addFish={this.addFish}/>
                <button onClick={this.loadSamples}>Load Sample fishes</button>
            </div>
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
        actionAddFish: (fishId, fish) => dispatch(actionAddFish(fishId, fish)),
        actionLoadFishes: (samples) => dispatch(actionLoadFishes(samples))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);