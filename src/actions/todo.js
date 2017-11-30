export const ADD = 'ADD';
export const GET_ITEMS = 'GET_ITEMS';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const DELETE = 'DELETE';
export const COMPLETED = 'COMPLETED';

export const addItem = text => ({
  type: ADD,
  text,
});

export const getItems = () => ({
  type: GET_ITEMS,
});

export const deleteItem = index => ({
  type: DELETE,
  index,
});

export const changeItemType = (index, isSelected) => ({
  type: COMPLETED,
  index,
  isSelected,
});
