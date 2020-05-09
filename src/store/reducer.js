import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM, GET_List } from './actionTypes';
const defaultState = {
  inputValue:'',
  list:[]
}

export default (state = defaultState, action) => {
  if(action.type === GET_List) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }
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
    console.log(state,action)
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState;
  }
  
  return state;
}