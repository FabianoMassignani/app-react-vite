import * as types from './Auth.constants'

export const loginSuccess = (payload: IUser) => ({
    type: types.LOGIN_SUCCESS,
    payload,
})

export const loginFailed = () => ({
    type: types.LOGIN_FAILED,
})

export const userLoaded = (payload: IUser) => ({
    type: types.USER_LOADED,
    payload,
})

export const authError = () => ({
    type: types.AUTH_ERROR,
})

export const logoutSuccess = () => ({
    type: types.LOGOUT,
})

export const registerSuccess = (payload: IUser) => ({
    type: types.REGISTER_SUCCESS,
    payload,
})

export const registerFailed = () => ({
    type: types.REGISTER_FAILED,
})
