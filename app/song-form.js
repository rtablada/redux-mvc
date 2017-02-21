import { createSong } from './actions';

export default class SongForm {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  clearForm() {
    this.el.querySelectorAll('[song-param]')
      .forEach((el) => {
        el.value = '';
      });
  }

  valueFor(param) {
    return this.el.querySelector(`[song-param=${param}]`).value;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const formValues = {
        title: this.valueFor('title'),
        artist: this.valueFor('artist'),
        bpm: this.valueFor('bpm'),
      };
      this.clearForm();

      this.store.dispatch(createSong(formValues));
    });
  }
}
