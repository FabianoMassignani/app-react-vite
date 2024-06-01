import * as types from './Auth.constants'

export const login = () => ({
    type: types.LOGIN,
})

export const loginSuccess = (payload: IUser) => ({
    type: types.LOGIN_SUCCESS,
    payload,
})

export const loginFailed = () => ({
    type: types.LOGIN_FAILED,
})

export const register = () => ({
    type: types.REGISTER,
})

export const registerSuccess = (payload: IUser) => ({
    type: types.REGISTER_SUCCESS,
    payload,
})

export const registerFailed = () => ({
    type: types.REGISTER_FAILED,
})

export const userLoaded = (payload: IUser) => ({
    type: types.USER_LOADED,
    payload,
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})
