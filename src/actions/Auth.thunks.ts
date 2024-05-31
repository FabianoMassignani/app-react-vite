import axios from 'axios'
import { baseAPIUrl } from '../constants/urls'
import * as actions from './Auth.actions'
import { Dispatch } from 'redux'

export const loadUser = () => async (dispatch: Dispatch) => {
    const userJson = localStorage.getItem('user') || '{}'
    const user = JSON.parse(userJson) as IUser
    const accessToken = user.accessToken

    if (!accessToken) {
        dispatch(actions.authError())
        return
    }

    try {
        const res = await axios.get(`${baseAPIUrl}/user/currentUser`, {
            headers: {
                Authorization: accessToken,
            },
        })

        if (res) {
            dispatch(
                actions.userLoaded({ accessToken: accessToken, ...res.data })
            )
            return
        }

        dispatch(actions.authError())
        return
    } catch (error) {
        dispatch(actions.authError())
        return
    }
}

export const login = (payload: ReqLogin) => async (dispatch: Dispatch) => {
    const { email, password } = payload

    try {
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

export const register =
    (payload: ReqRegister) => async (dispatch: Dispatch) => {
        try {
            const res = await axios.post(`${baseAPIUrl}/user/register`, {
                ...payload,
            })

            dispatch(actions.registerSuccess(res.data))
        } catch (error: any) {
            return dispatch(actions.registerFailed())
        }
    }

export const logout = () => async (dispatch: Dispatch) => {
    dispatch(actions.logoutSuccess())
}
