import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Router from 'router/router'
import Nav from 'components/nav/nav'
import style from './app.sass'

@withRouter
export default class App extends Component {
    render() {
        return (
            <div className={style.container}>
                <Nav />
                <div className={style.mainWrapper}>
                    {Router()}
                </div>
            </div>
        )
    }
}