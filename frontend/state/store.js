import { configureStore } from '@reduxjs/toolkit'
import qutoesReducer from './quotesSlice'

export const store = configureStore({
    reducer: {
        quotesState: qutoesReducer,
    }
})
