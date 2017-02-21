import SongList from './song-list';
import SongForm from './song-form';
import LoadingBar from './loading-bar';

export default class App {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.songList = new SongList(this.el.querySelector('.song-list'), store);
    this.songForm = new SongForm(this.el.querySelector('.new-song-card'), store);
    this.loadingBar = new LoadingBar(this.el.querySelector('.progress'), store);
  }

  created() {
    this.songList.mounted();
    this.songForm.mounted();
    this.loadingBar.mounted();

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
