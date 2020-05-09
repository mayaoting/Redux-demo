import React, { Component } from 'react';
import { changeInputValue,addItem,deleteItem } from './store/actionCreator';
import TodoListUI from './TodoListUI';
import store from './store/index'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(this.storeChange)
  };
  storeChange = () => {
    this.setState(store.getState());
  };
  changeInputValue = (e) => {
    const action = changeInputValue(e.target.value)
    store.dispatch(action);
  };
  clickBtn = () => {
    const action = addItem();
    store.dispatch(action);
  };
  deleteItem = (item, index) => {
    const action = deleteItem(index);
    store.dispatch(action);
  };
  render() { 
    const {list,inputValue} = this.state;
    return ( 
      <TodoListUI
        inputValue={inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={list}
        deleteItem={this.deleteItem}
      />
     );
  }
}
 
export default TodoList;