import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_List } from './actionTypes';

export const changeInputValueAction = (value) => ({
  type:CHANGE_INPUT,
  value,
})

export const addItemAction = () => ({
  type:ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type:DELETE_ITEM,
  index,
})

export const getListAction = (data) => ({
  type:GET_List,
  data,
})