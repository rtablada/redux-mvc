export default class {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    const { fetching } = this.store.getState();

    if (fetching) {
      this.el.value = 0;

      this.el.classList.remove('hide');
    } else {
      const frame = Math.floor(1000 / 60);

      const animator = window.setInterval(() => {
        if (this.el.value === 100) {
          window.setTimeout(() => {
            this.el.classList.add('hide');
          }, 10 * frame);

          return window.clearInterval(animator);
        }

        window.requestAnimationFrame(() => {
          this.el.value += 100 / 120;
        });
      }, frame / 6);
    }
  }
}
