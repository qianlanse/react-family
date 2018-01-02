import React from 'react'

import style from './about.sass'
class About extends React.Component {
    render() {
        return (
            <div className={style['container']}>
                <img src="https://dummyimage.com/600x400/06b2e2/fff.png&text=Gufeng+Music" alt="" className={style['thumb-adver']}/>
                <p className={style['intro']}>欢迎你来到我的音乐乐园</p>
            </div>
        )
    }
}

export default About