import React, { Component } from 'react';
import { Input,Button,List } from 'antd'
import { changeInputValue,addItem,deleteItem } from './store/actionCreator';
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
      <div style={{padding:'20px 20px'}}>
        <div>
          <Input placeholder='writeSomething' 
            style={{ width:'250px'}}
            onChange={this.changeInputValue}
            value={inputValue}
          />
          <Button type='primary' style={{marginLeft:'10px'}} onClick={this.clickBtn}>add</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List 
            bordered
            dataSource={list}
            renderItem={(item,index) => (
              <List.Item onClick={()=> this.deleteItem(item,index)}>{item}</List.Item>
            )}
          />
        </div>
      </div>
     );
  }
}
 
export default TodoList;