import {
  createAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { Team, UpdateTeamInput } from '@stfuandclick/data'

import mainApi from '../../api/MainApi'

export const TEAM_FEATURE_KEY = 'team'

/*
 * Update these interfaces according to your requirements.
 */
export type TeamEntity = Team

export interface TeamState extends EntityState<TeamEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error'
  error: string
  current: Current
}

export interface Current {
  session: string
  teamName: string
  clicks: number
}

export interface TeamsState {
  teams: TeamEntity[]
  loading: boolean
  error: string
}

export interface ResolvedCurrent {
  session: string
  team: TeamEntity
  clicks: number
}

export const teamAdapter = createEntityAdapter<TeamEntity>({
  selectId: team => team.name,
  sortComparer: (a, b) => b.clicks - a.clicks
})

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const fetchTeams = createAsyncThunk('team/fetchStatus', async () => {
  const result = await mainApi.getLeaderboard()
  return result.data
})

export const click = createAsyncThunk(
  'team/click',
  async ({ teamName, session }: UpdateTeamInput) => {
    // TODO: implement validation errors
    const result = await mainApi.getLeaderboard()
    return {
      teamName,
      session
    }
  }
)

export const setCurrentTeam = createAction(
  'team/setCurrent',
  (teamName: string) => {
    return {
      payload: {
        teamName,
        session: nanoid()
      }
    }
  }
)

export const updateTeam = createAsyncThunk(
  'team/update',
  async ({ teamName, session }: UpdateTeamInput) => {
    // TODO: implement validation errors
    const result = await mainApi.getLeaderboard()
    return result.data
  }
)

export const initialTeamState: TeamState = teamAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
  current: {
    session: '',
    teamName: '',
    clicks: 0
  }
})

export const teamSlice = createSlice({
  name: TEAM_FEATURE_KEY,
  initialState: initialTeamState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setCurrentTeam, (state: TeamState, { payload }) => {
      state.current.session = payload.session
      state.current.teamName = payload.teamName

      if (!state.entities[payload.teamName]) {
        state.entities[payload.teamName] = {
          order: state.ids.length + 1,
          name: payload.teamName,
          clicks: 0
        }
      }
    })
    builder.addCase(click.pending, (state: TeamState) => {
      state.current.clicks = state.current.clicks + 1
      state.entities[state.current.teamName].clicks =
        state.entities[state.current.teamName].clicks + 1
    })
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
  click,
  fetchTeams,
  setCurrentTeam
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
      ...rootState[TEAM_FEATURE_KEY],
      teams: ids
        .slice(0, 10)
        .map(id => entities[id])
        .sort((a, b) => b.clicks - a.clicks),
      loading: rootState[TEAM_FEATURE_KEY].loadingStatus === 'loading'
    }
  },
  getCurrent: (rootState: unknown): ResolvedCurrent => {
    const entities = rootState[TEAM_FEATURE_KEY].entities
    const current = rootState[TEAM_FEATURE_KEY].current

    return {
      clicks: current.clicks,
      session: current.session,
      team: entities[current.teamName] || { name: current.teamName, clicks: 0 }
    }
  },
  ...teamAdapter.getSelectors()
}
