import { configureStore } from '@reduxjs/toolkit'

import  amazonReducer  from '../state/store'

export const store = configureStore({
  reducer: {
     amazonReducer:amazonReducer,
  },
})