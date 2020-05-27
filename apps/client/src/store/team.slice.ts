import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit'

import { Team } from '@stfuandclick/data'

import mainApi from '../api/MainApi'

export const TEAM_FEATURE_KEY = 'team'

/*
 * Update these interfaces according to your requirements.
 */
export type TeamEntity = Team

export interface TeamState extends EntityState<TeamEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error'
  error: string
}

export interface TeamsState {
  teams: TeamEntity[]
  loading: boolean
  error: string
}

export const teamAdapter = createEntityAdapter<TeamEntity>({
  sortComparer: (a, b) => b.clicks - a.clicks
})

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const fetchTeams = createAsyncThunk(
  'team/fetchStatus',
  async (_, thunkAPI) => {
    const result = await mainApi.getLeaderboard()
    return result.data
  }
)

export const initialTeamState: TeamState = teamAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null
})

export const teamSlice = createSlice({
  name: TEAM_FEATURE_KEY,
  initialState: initialTeamState,
  reducers: {
    addTeam: teamAdapter.addOne,
    removeTeam: teamAdapter.removeOne
    // ...
  },
  extraReducers: builder => {
    builder.addCase(fetchTeams.pending, (state: TeamState) => {
      state.loadingStatus = 'loading'
    })
    builder.addCase(
      fetchTeams.fulfilled,
      (state: TeamState, action: PayloadAction<TeamEntity[]>) => {
        teamAdapter.addMany(state, action.payload)
        state.loadingStatus = 'loaded'
      }
    )
    builder.addCase(fetchTeams.rejected, (state: TeamState, action) => {
      state.loadingStatus = 'error'
      state.error = action.error.message
    })
  }
})

/*
 * Export reducer for store configuration.
 */
export const teamReducer = teamSlice.reducer

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(teamActions.addTeam([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const teamActions = {
  ...teamSlice.actions,
  fetchTeams
}

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectTeamEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const teamSelectors = {
  getTeamState: (rootState: unknown): TeamState => rootState[TEAM_FEATURE_KEY],
  getTopTenTeams: (rootState: unknown): TeamsState => {
    const entities = rootState[TEAM_FEATURE_KEY].entities
    const ids = rootState[TEAM_FEATURE_KEY].ids

    return {
      teams: ids.slice(0, 10).map(id => entities[id]),
      loading: rootState[TEAM_FEATURE_KEY].loadingStatus === 'loading',
      error: rootState[TEAM_FEATURE_KEY].error
    }
  },
  ...teamAdapter.getSelectors()
}
