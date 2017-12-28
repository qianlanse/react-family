import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Bundle from './bundle'
import Loading from 'components/loading/loading'

import Home from 'bundle-loader?lazy&name=home!screens/home/home'
import About from 'bundle-loader?lazy&name=about!screens/about/about'
import NotFound from 'bundle-loader?lazy&name=notfound!screens/notfound/notfound'

const CreateComponent = component => () => (
    <Bundle load={component}>
        {
            Component => Component ? <Component /> : <Loading />
        }
    </Bundle>
)

export default () => (
    <Switch>
        <Route exact path='/' component={CreateComponent(Home)} />
        <Route path='/about' component={CreateComponent(About)} />
        <Route component={CreateComponent(NotFound)}/>
    </Switch>
)