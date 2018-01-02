import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Bundle from './bundle'
import Loading from 'components/loading/loading'

import Recommend from 'bundle-loader?lazy&name=recommend!screens/recommend/recommend'
import Singer from 'bundle-loader?lazy&name=singer!screens/singer/singer'
import Rank from 'bundle-loader?lazy&name=rank!screens/rank/rank'
import Search from 'bundle-loader?lazy&name=search!screens/search/search'
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
        <Route exact path='/' component={CreateComponent(Recommend)} />
        <Route path='/recommend' component={CreateComponent(Recommend)} />
        <Route path='/singer' component={CreateComponent(Singer)} />
        <Route path='/rank' component={CreateComponent(Rank)} />
        <Route path='/search' component={CreateComponent(Search)} />
        <Route path='/about' component={CreateComponent(About)} />
        <Route component={CreateComponent(NotFound)}/>
    </Switch>
)