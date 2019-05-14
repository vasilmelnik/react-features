import '../../css/style.css';
import { state } from './state';
import { Controls } from './controls';

export class Field {
  constructor(width, height, state) {
    this.width = width;
    this.height = height;
    this.arr = state;
  }

  getField(isChecking = false) {
    const container = document.createElement('div');
    container.className = 'field'
    this.arr.map((item, i) => {
      const div = document.createElement('div');
      item.map((elem, j) => {
        const span = document.createElement('span');
        span.id = i + '' + j;
        span.className = 'cell'
        span.innerHTML = this.arr[i][j];
        div.appendChild(span);
      });
      container.appendChild(div);
    });
    return container;
  }

  handleClick(e) {
    if(!e.target.id) {
      return;
    }

    this.arr.map((elem, i) => {
      return elem.map((item, j) => {
        console.log(e.target, i+''+j);
        return this.arr[i][j] = e.target.id === i + '' +j ? 'x' : this.arr[i][j];
      });
    });
    state.setState(this.arr);
    this.render(false);
  };

  init() {
    this.handleClick = this.handleClick.bind(this);
    const field = document.querySelector('.field');
    field.addEventListener('click', this.handleClick);
  }

  render(isChecking) {
    const field = this.getField(isChecking);
    document.body.innerHTML = '';
    document.body.appendChild(field);
    this.init();
    const controls = new Controls();
    return this.arr;
  }
}