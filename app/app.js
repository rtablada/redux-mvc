import SongList from './song-list';

export default class App {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.songList = new SongList(this.el.querySelector('.song-list'), store);
  }

  created() {
    this.songList.mounted();

    this.store.dispatch((dispatch) => {
      dispatch({ type: 'SONGS@FETCH_STARTED' });

      fetch('http://tiny-lr.herokuapp.com/collections/ryan-songs')
        .then(r => r.json())
        .then((data) => {
          dispatch({
            type: 'SONGS@UPDATE_MANY',
            data,
          });
        });
    });
  }
}
