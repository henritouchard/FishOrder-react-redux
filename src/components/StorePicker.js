import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log(this.storeInput.value);
        //grab text from box
        // const storeId = this.storeInput.value;
        // transit it to store
        this.context.router.transitionTo(`/store/${this.storeInput.value}`);
    }

    render(){
        return (
            <form className="store-selector" onSubmit={(e) => {this.goToStore(e)}} >
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="store name"
                defaultValue={getFunName()} ref={(input)=> {this.storeInput = input}} />
                <button type="submit">visit Store -></button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}