import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Scroll from 'components/scroll/scroll'
import LazyLoad from 'react-lazyload'
import styles from './nav.sass'

export default class Nav extends Component {
    state = {
        dataSource: new Array(20).fill().map((v, k) => k + 1)
    }
    render() {
        return (
            <Scroll className={styles['slidebar-scroll-wrapper']}>
                <div className={styles['slidebar-scroll-inner-wrapper']}>
                    <div className={styles['intro-container']}>
                        <div className={styles['logo']}>
                            <LazyLoad height={100} placeholder={<img src="https://dummyimage.com/100x100/06b2e2/fff.png&text=Loading"/>}>
                                <img 
                                    className={styles['thumb']}
                                    src="https://dummyimage.com/200x200/06b2e2/fff.png&text=Gufeng+Music" 
                                    alt="浅蓝喜爱古风音乐"/>
                            </LazyLoad>
                        </div>
                        <h1 className={styles['title']}>浅蓝，爱音乐</h1>
                        <p className={styles['desc']}>使生如夏花之绚烂，死如秋叶之静美</p>
                    </div>
                    <nav className={styles['nav-container']}>
                        <ul>
                            <li>
                                <Link to='/recommend'>推荐</Link>
                            </li>
                            <li>
                                <Link to='/singer'>歌手</Link>
                            </li>
                            <li>
                                <Link to='/rank'>排行</Link>
                            </li>
                            <li>
                                <Link to='/search'>搜索</Link>
                            </li>
                            <li>
                                <Link to='/about'>关于</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Scroll>
        )
    }
}