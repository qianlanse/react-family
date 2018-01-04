import React from 'react'
import className from 'classnames'
import icon from 'assets/styles/icon.sass'
import style from './logo.sass'

class Logo extends React.Component{
    render() {
        const containerStyle = className(style['container'], this.props.containerStyle)
        const logoIcon = className(icon['icomoon'], icon['icon-music-icon'])
        return (
            <div className={containerStyle}>
                <div className={style['logo-box']}>
                    <i className={logoIcon}></i>   
                </div>
                <h2 className={style['logo-name']}>GuFeng Music</h2>
            </div>
        )
    }
}

Logo.defaultProps = {
    
}

export default Logo