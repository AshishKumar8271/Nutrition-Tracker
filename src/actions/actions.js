//Action types:
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_ITEMS = "CLEAR_ITEMS";
export const INC_QUANTITY = "INC_QUANTITY";
export const DEC_QUANTITY = "DEC_QUANTITY"; 
export const EDIT_ITEM = "EDIT_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const TOTAL_NUTRITIONS = "TOTAL_NUTRITIONS";

//Action Creators:
export const addItems = (item) => {
  return {
    type: ADD_ITEM,
    payload: { ...item },
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  }
}

export const incQuantity = (id) => {
  return {
    type: INC_QUANTITY,
    payload: id,
  };
};

export const decQuantity = (id) => {
    return {
      type: DEC_QUANTITY,
      payload: id,
    };
};

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    payload: id
  }
}

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}

export const totalNutritions = () => {
    return {
      type:TOTAL_NUTRITIONS,
    }
}