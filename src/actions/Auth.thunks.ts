import axios from 'axios'
import { baseAPIUrl } from '../constants/urls'
import * as actions from './Auth.actions'
import { Dispatch } from 'redux'

export const loadUser = () => async (dispatch: Dispatch) => {
    const userJson = localStorage.getItem('user') || '{}'
    const user = JSON.parse(userJson) as IUser

    try {
        if (user) {
            dispatch(actions.userLoaded(user))
            return
        }

        return
    } catch (error) {
        return
    }
}

export const login = (data: ReqLogin) => async (dispatch: Dispatch) => {
    const { email, password } = data

    try {
        dispatch(actions.login())

        const response = await axios.post(`${baseAPIUrl}/user/login`, {
            email,
            password,
        })

        const user = response.data

        if (user.auth) {
            dispatch(actions.loginSuccess(user))
            return
        }

        return dispatch(actions.loginFailed())
    } catch (error: any) {
        return dispatch(actions.loginFailed())
    }
}

export const register = (data: ReqRegister) => async (dispatch: Dispatch) => {
    try {
        dispatch(actions.register())

        const res = await axios.post(`${baseAPIUrl}/user/register`, {
            ...data,
        })

        if (res) {
            dispatch(actions.registerSuccess(res.data))
            return
        }

        return dispatch(actions.registerFailed())
    } catch (error: any) {
        return dispatch(actions.registerFailed())
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    dispatch(actions.logoutSuccess())
}
