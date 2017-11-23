import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
// import redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer as combiner } from './reducers';

import './css/style.css'

// let store = createStore(combiner);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(combiner);

const unsubscribe = store.subscribe(() =>
    store.getState()
)


const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Match exactly pattern="/" component={App} />
                    <Miss component={NotFound} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

render(<Root />, document.querySelector('#main'));