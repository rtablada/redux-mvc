import SongList from './song-list';
import SongForm from './song-form';
import LoadingBar from './loading-bar';

import { findAll } from './actions';

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

    this.store.dispatch(findAll);
  }
}
