class SongItem {
  constructor(song) {
    this.song = song;
    this.el = document.createElement('li');
    this.el.classList.add('song-item', 'panel-block');

    this.el.innerHTML = `
      <div class="level is-fullwidth">
        <div class="level-left">
          <h2 class="subtitle">
            <span class="song-item__title"></span>
            <span class="song-item__artist"></span>
          </h2>
        </div>

        <div class="level-right">
          <p class="subtitle is-6">
            BPM <span class="song-item__bpm"></span>
          </p>
        </div>
      </div>`;
  }

  querySelector(selector) {
    return this.el.querySelector(`.song-item__${selector}`);
  }

  render() {
    this.querySelector('title').innerText = this.song.title;
    this.querySelector('artist').innerText = this.song.artist;
    this.querySelector('bpm').innerText = this.song.bpm;
  }
}

export default class SongList {
  constructor(el, store) {
    this.store = store;
    this.el = el;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';

    const { songs } = this.store.getState();

    songs.map((song) => {
      const view = new SongItem(song);
      view.render();

      return view;
    }).forEach((view) => {
      this.el.appendChild(view.el);
    });
  }
}
