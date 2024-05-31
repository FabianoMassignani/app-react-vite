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
    loading: true,
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
            case types.LOGIN_SUCCESS:
            case types.LOGIN_FAILED:
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
            case types.AUTH_ERROR:
            case types.LOGOUT:
                localStorage.removeItem('user')
                draft.accessToken = null
                draft.isAuthenticated = false
                draft.loading = false
                break

            default:
                return state
        }
    })
