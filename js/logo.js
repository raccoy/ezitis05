class Bubble {
  constructor() {
    this.elems = [
    {
      el: document.querySelector('.bubble'),
      factor: 0.2 },

    {
      el: document.querySelector('.cross'),
      factor: 0.2 },

    {
      el: document.querySelector('.circle'),
      factor: 0.1 }];


    this.holder = document.querySelector('.holder');
    this.duration = 0.3;
    this.leaveDuration = 0.5;

    this.addEventListeners();
  }

  addEventListeners() {
    this.holder.addEventListener('mousemove', this.mouseMove.bind(this));
    this.holder.addEventListener('mouseleave', this.mouseLeave.bind(this));
  }

  mouseMove(e) {
    const rawX = e.offsetX;
    const rawY = e.offsetY;
    const w = this.holder.offsetWidth;
    const h = this.holder.offsetHeight;
    const halfW = w / 2;
    const halfH = h / 2;

    this.elems.map(item => {
      const x = (rawX - halfW) * item.factor;
      const y = (rawY - halfH) * item.factor;

      TweenMax.to(item.el, this.duration, {
        x: x,
        y: y });

    });
  }

  mouseLeave() {
    this.elems.map(item => {
      TweenMax.to(item.el, this.leaveDuration, {
        x: 0,
        y: 0 });

    });
  }}


const bubble = new Bubble();
