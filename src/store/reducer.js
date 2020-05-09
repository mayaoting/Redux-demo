import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes';
const defaultState = {
  inputValue:'',
  list:[
    'morning 8 meeting dispatch working',
    'morning 9 meeting dispatch working',
    'morning 10 meeting dispatch working',
    'start'
  ]
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    if(newState.inputValue === '') {
      return ;
    }
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState;
  }
  return state;
}