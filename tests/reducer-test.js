import reducer from '../app/reducer';

module('Reducer', () => {
  test('It has a default state', (assert) => {
    const initialState = reducer(null, { type: '@@INIT' });

    assert.deepEqual(initialState, {
      songs: [], fetching: false,
    }, 'The initialState should have an empty array of songs and a false fetching state');
  });

  test('It changes to know when it is starting a fetch: SONGS@FINDALL_START', (assert) => {
    const result = reducer({ songs: [], fetching: false }, {
      type: 'SONGS@FINDALL_START'
    });
    const resultWithSongs = reducer({
      songs: [1, 2, 3], fetching: false,
    }, {
      type: 'SONGS@FINDALL_START'
    });

    assert.deepEqual(result, {
      songs: [], fetching: true,
    }, 'It should toggle the fetching state of the app');
    assert.deepEqual(resultWithSongs, {
      songs: [1, 2, 3], fetching: true,
    }, 'It should toggle the fetching state of the app');
  });

  test('It knows how to replace the songs it knows about: SONGS@FINDALL_COMPLETE', (assert) => {
    const result = reducer({ songs: [], fetching: false }, {
      type: 'SONGS@FINDALL_COMPLETE',
      data: [1, 2, 3],
    });

    assert.deepEqual(result, {
      songs: [1, 2, 3], fetching: false,
    }, 'It should toggle the fetching state of the app');
  });
});
