import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from 'screens/home/home'
import About from 'screens/about/about'

export default () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/about'>介绍</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    </Router>
)