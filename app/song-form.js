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

      this.store.dispatch((dispatch) => {
        dispatch({
          type: 'SONGS@CREATE_STARTED',
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
            type: 'SONGS@CREATE_SAVED',
            data: song,
          });
        });
      });
    });
  }
}
