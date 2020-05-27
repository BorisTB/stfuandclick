import { configureStore } from '@reduxjs/toolkit'

import { TEAM_FEATURE_KEY, teamReducer } from './team/team.slice'
import { USER_FEATURE_KEY, userReducer } from './user/user.slice'

const store = configureStore({
  reducer: {
    [TEAM_FEATURE_KEY]: teamReducer,
    [USER_FEATURE_KEY]: userReducer
  }
})

export type AppDispatch = typeof store.dispatch

export default store
