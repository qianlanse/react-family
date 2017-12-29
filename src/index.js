import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'components/app/app'
import store from './redux/store'
import 'assets/styles/index.sass'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

render(App)

// Webpack hot module replacement api
if (module.hot) {
    module.hot.accept('components/app/app', () => {
        const hotApp = require('components/app/app').default
        render(hotApp)
    })
}

