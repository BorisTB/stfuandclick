import { teamActions, teamAdapter, teamReducer } from './team.slice'

describe('team reducer', () => {
  it('should handle initial state', () => {
    const expected = teamAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null
    })

    expect(teamReducer(undefined, { type: '' })).toEqual(expected)
  })

  it('should handle fetchTeams', () => {
    let state = teamReducer(
      undefined,
      teamActions.fetchTeams.pending(null, null)
    )

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {}
      })
    )

    state = teamReducer(
      state,
      teamActions.fetchTeams.fulfilled([{ id: 1 }], null, null)
    )

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } }
      })
    )

    state = teamReducer(
      state,
      teamActions.fetchTeams.rejected(new Error('Uh oh'), null, null)
    )

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } }
      })
    )
  })
})
