import React from 'react'
import classNames from 'classnames'
import icon from 'assets/styles/icon.sass'

class Recommend extends React.Component {
    render() {
        const likeIcon  = classNames(icon['icomoon'], icon['icon-love-icon'])
        return (
            <div>
                <p>Recommend</p>
                <i className={likeIcon}></i>
            </div>
        )
    }
}

export default Recommend