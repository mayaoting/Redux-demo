import React, { Component } from 'react';
import axios from 'axios';
import { changeInputValueAction,addItemAction,deleteItemAction, getListAction } from './store/actionCreator';
import TodoListUI from './TodoListUI';
import store from './store/index'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(this.storeChange)
  };
  componentDidMount() {
    axios.get('https://5eb669c7875f1a00167e0c82.mockapi.io/api/mock/todoListData').then((res)=> {
      console.log(res);
      const data = res.data;
      const action = getListAction(data);
      store.dispatch(action)
    })
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  changeInputValue = (e) => {
    const action = changeInputValueAction(e.target.value)
    store.dispatch(action);
  };
  clickBtn = () => {
    const action = addItemAction();
    store.dispatch(action);
  };
  deleteItem = (index) => {
    console.log(index)
    const action = deleteItemAction(index);
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