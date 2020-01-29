/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore, { history } from './data/store/configureStore';
import Root from './root';

import './data/styles/index.scss';
// import './data/styles/antd.less';

require('./favicon.ico');

const store = configureStore();

render(
    <AppContainer>
        <Root store={store} history={history}></Root>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}