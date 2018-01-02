import React, { Component } from 'react'
import classNames from 'classnames'
import Router from 'router/router'
import Nav from 'components/nav/nav'
import style from './app.sass'
import icon from 'assets/styles/icon.sass'

export default class App extends Component {
    state = {
        mobileShowSidebar: false
    }
    show = () => {
        this.setState({
            mobileShowSidebar: !this.state.mobileShowSidebar
        })
    }
    render() {
        const innerStyle = classNames(style['sidebar-content'], {
            [style['mobile-sidebar-content-show']]: this.state.mobileShowSidebar
        })
        const maskStyle = classNames(style['mobile-mask'], {
            [style['mobile-mask-show']]: this.state.mobileShowSidebar
        })
        const menuIcon = classNames(icon['iconfont'], icon['icon-cd_icon'])
        return (
            <div className={style.container}>
                <div className={style.sidebar}>
                    <div className={maskStyle} onClick={this.show}/>
                    <div className={innerStyle}>
                        <Nav />
                    </div>
                </div>
                <div className={style['mobile-menu-wrapper']} onClick={this.show}>
                    <i className={menuIcon}></i>
                </div>
                <div className={style.main}>
                    {Router()}
                </div>
            </div>
        )
    }
}