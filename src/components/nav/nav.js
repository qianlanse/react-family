import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.sass'
export default class Nav extends Component {
    render() {
        const { 
            sidebarWrapper, 
            introContainer, logo, thumb, introTitle, introDesc,
            navContainer
        } = styles
        return (
            <div className={sidebarWrapper}>
                <div className={introContainer}>
                    <div className={logo}>
                        <img 
                            className={thumb}
                            src="https://dummyimage.com/200x200/06b2e2/fff.png&text=Gufeng+Music" 
                            alt="浅蓝喜爱古风音乐"/>
                    </div>
                    <h1 className={introTitle}>浅蓝，爱音乐</h1>
                    <p className={introDesc}>使生如夏花之绚烂，死如秋叶之静美</p>
                </div>
                <nav className={navContainer}>
                    <ul>
                        <li>
                            <Link to='/'>首页</Link>
                        </li>
                        <li>
                            <Link to='/about'>介绍</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}