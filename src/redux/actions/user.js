import { AUTH_SUCCESS } from './types'

export const login = () => {
    return dispatch => {
        return dispatch(loginHandler())
    }
}

const loginHandler = () => {
    return {
        type: AUTH_SUCCESS,
        data: {
            username: Math.floor(Math.random() * 10),
            userid: '123456'
        }
    }
}