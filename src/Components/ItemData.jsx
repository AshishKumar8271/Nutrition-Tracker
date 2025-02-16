import React, { useCallback, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { addItems, clearItems, updateItem } from '../actions/actions';
import { useDispatch, useSelector } from "react-redux";

const ItemData = () => {
  const itemToEdit = useSelector((state) => state.nutrition.itemToEdit)
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });


  useEffect(() => {
    if (itemToEdit) {
      setItem(itemToEdit);
    }
  }, [itemToEdit])

  const handleChange = (e) => {
    setItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.name === "name" ? e.target.value : Number(e.target.value),
    }));
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (itemToEdit) {
      dispatch(updateItem(item));
    }
    else {
      let newItem = {
        ...item,
        id: new Date().getTime().toString(),
        quantity: 1,
      }

      dispatch(addItems(newItem));
    }

    setItem({
      id: "",
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      quantity: 0,
    })
  }, [item, addItems]);

  return (
    <form className="mt-4 w-full" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <InputBox
          name="name"
          children={"Item Name"}
          onChange={handleChange}
          value={item.name}
        />
        <InputBox
          name="calories"
          children={"Calories"}
          onChange={handleChange}
          value={item.calories}
        />
        <InputBox
          name="protein"
          children={"Protein (g)"}
          onChange={handleChange}
          value={item.protein}
        />
        <InputBox
          name="carbs"
          children={"Carbs (g)"}
          onChange={handleChange}
          value={item.carbs}
        />
        <InputBox
          name="fat"
          children={"Fat (g)"}
          onChange={handleChange}
          value={item.fat}
        />
      </div>

      <div className="flex mt-4 gap-4">
        {
          itemToEdit ?
            <button
              type="submit"
              className="w-full bg-blue-500 shadow-md text-white p-2 rounded-md hover:bg-blue-400 transition-all"
            >
              Update Item
            </button>
            :
            <button
              type="submit"
              className="w-full bg-green-500 shadow-md text-white p-2 rounded-md hover:bg-green-400 transition-all"
            >
              Add Item
            </button>
        }
        <button className="w-full bg-red-500 shadow-md text-white rounded-md hover:bg-red-400 transition-all" onClick={() => dispatch(clearItems())}>
          Clear All
        </button>
      </div>
    </form>
  );
};

export default ItemData;
