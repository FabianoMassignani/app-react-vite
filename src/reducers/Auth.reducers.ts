import * as types from '../actions/Auth.constants'
import { produce } from 'immer'

let userType: IUser = {
    id: '',
    name: '',
    email: '',
    password: '',
    accessToken: '',
}

const initialState = {
    loading: false,
    isAuthenticated: false,
    accessToken: null,
    user: userType,
}

export const authReducer = (state = initialState, action: ActionRedux) =>
    produce(state, (draft) => {
        switch (action.type) {
            case types.USER_LOADED:
                draft.isAuthenticated = true
                draft.loading = false
                draft.accessToken = action.payload.accessToken
                draft.user = {
                    ...action.payload.user,
                    accessToken: action.payload.accessToken,
                }
                break
            case types.LOGIN:
                draft.loading = true
                break
            case types.LOGIN_SUCCESS:
                localStorage.setItem('user', JSON.stringify(action.payload))
                draft.isAuthenticated = true
                draft.loading = false
                draft.user = action.payload
                break
            case types.LOGIN_FAILED:
                draft.loading = false
                break
            case types.REGISTER:
                draft.loading = true
                break
            case types.REGISTER_SUCCESS:
                localStorage.setItem('user', JSON.stringify(action.payload))
                draft.isAuthenticated = true
                draft.loading = false
                draft.user = action.payload
                break
            case types.REGISTER_FAILED:
                localStorage.removeItem('user')
                draft.accessToken = null
                draft.isAuthenticated = false
                draft.loading = false
                break
            case types.LOGOUT_SUCCESS:
                localStorage.removeItem('user')
                draft.accessToken = null
                draft.isAuthenticated = false
                draft.loading = false
                break

            default:
                return state
        }
    })
