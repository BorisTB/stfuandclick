import { configureStore } from '@reduxjs/toolkit'

import { TEAM_FEATURE_KEY, teamReducer } from './team/team.slice'

const store = configureStore({
  reducer: {
    [TEAM_FEATURE_KEY]: teamReducer
  }
})

export type AppDispatch = typeof store.dispatch

export default store
