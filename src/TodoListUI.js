import React from 'react';
import { Input,Button,List } from 'antd'

const TodoListUI = (props) => {
  const { 
    inputValue,
    list,
    changeInputValue,
    clickBtn,
    deleteItem,
  } = props;
  return (
    <div style={{padding:'20px 20px'}}>
        <div>
          <Input placeholder='writeSomething' 
            style={{ width:'250px'}}
            onChange={changeInputValue}
            value={inputValue}
          />
          <Button type='primary' style={{marginLeft:'10px'}} onClick={clickBtn}>add</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List 
            bordered
            dataSource={list}
            renderItem={(item,index) => (
              <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
            )}
          />
        </div>
      </div>
  )
}
export default TodoListUI;