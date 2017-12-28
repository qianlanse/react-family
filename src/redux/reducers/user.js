import { AUTH_SUCCESS, AUTH_FAIL } from 'actions/types'

const initState = {
    username: '',
    password: '',
    message: '',
    userid: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {...state, message: '', username: action.data.username, userid: action.data.userid}
        case AUTH_FAIL:
            return {...state, message: action.message}
        default:
            return state
    }
}
