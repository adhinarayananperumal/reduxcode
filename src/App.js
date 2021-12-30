import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getBooks } from './actions/books';
import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getBooks()).then(() => {
    ReactDOM.render(template, document.getElementById('app'));
});
class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <AppRouter />
                </Provider>                

            </div>

        )
    }
}

export default App;