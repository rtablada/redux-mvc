export function findAll(dispatch) {
  dispatch({ type: 'SONGS@FINDALL_START' });

  fetch('http://tiny-lr.herokuapp.com/collections/ryan-songs')
    .then(r => r.json())
    .then((data) => {
      dispatch({
        type: 'SONGS@FINDALL_COMPLETE',
        data,
      });
    });
}

export function createSong(formValues) {
  return (dispatch) => {
    dispatch({
      type: 'SONGS@CREATE_START',
      data: formValues,
    });

    fetch('http://tiny-lr.herokuapp.com/collections/ryan-songs', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(r => r.json())
    .then((song) => {
      dispatch({
        type: 'SONGS@CREATE_COMPLETE',
        data: song,
      });
    });
  };
}
