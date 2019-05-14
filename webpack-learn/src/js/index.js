import { Field } from './components/field';
import { state } from './components/state';


const field = new Field(10, 10, state.getState());

window.onload = () => {
  const arr = field.render();
  state.setState(arr);
};