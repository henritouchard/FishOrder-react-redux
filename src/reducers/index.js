import { combineReducers } from 'redux';

function fishReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_FISH':
            return Object.assign({}, state, { [action.id]: action.payload});
        case 'LOAD_FISHES':
            return Object.assign({}, state, action.payload);            
        default:
            return state;
    }
}

function orderReducer(state = {}, action) {
    if (action.type === 'NEW_ORDER') {
        let obj = state;
        if (obj[action.payload] === undefined)
            obj[action.payload] = 0;
        obj[action.payload] += 1;
        return Object.assign({}, state, obj);
    }
    return state;
}

export const reducer = combineReducers({
    //nameOfIntersetingPart : function => nameOfInterestingPart: function(state.nameOfInterestingPart, action)
    fish: fishReducer, // will call addFish(state.fish , action)
    order: orderReducer // will call addNewOrder(state.order, action)
});
