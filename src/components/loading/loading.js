import React, { Component } from 'react'

import style from './loading.sass'

class Loading extends Component {
    render() {
        return (
            <div className={style['loading-wrapper']}>
                <div className={style['loading-inner']}>
                    <div className={style['loader-wrapper']}>
                        <div className={style['loader-inner']}></div>
                    </div>
                    <p className={style['loader-wrapper-txt']}>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

Loading.defaultProps = {
    text: '加载中..'
}

export default Loading