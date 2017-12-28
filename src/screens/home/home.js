import React from 'react'
import { connect } from 'react-redux'
import { login } from 'actions/user'
import { container } from './home.sass'

@connect(
    state => state.user,
    { login }
)
class Home extends React.Component {
    add = () => {
        this.props.login()
    }
    render() {
        return (
            <div className={container} onClick={this.add}>
                <p>{this.props.username}</p>
                <span>Hello home page</span>
            </div>
        )
    }
}

export default Home