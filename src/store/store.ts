import { authReducer } from '../reducers/Auth.reducers'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

export default store

export type StoreType = ReturnType<typeof store.getState>
