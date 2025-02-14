import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from './reducer.js';
import { addItems, decQuantity, incQuantity, editItem, updateItem, clearItems, deleteItem, totalNutritions } from "./actions.js";

const itemsInStorage = JSON.parse(localStorage.getItem('items')) || [];

const FitContext = createContext(null);

const initialState = {
    items: itemsInStorage,
    itemToEdit: null,
    totalCalories: itemsInStorage.reduce((calories, item) => calories += item.calories * item.quantity, 0),
    totalProtein: itemsInStorage.reduce((protein, item) => protein += item.protein * item.quantity, 0),
    totalCarbs: itemsInStorage.reduce((carbs, item) => carbs += item.carbs * item.quantity, 0),
    totalFat: itemsInStorage.reduce((fat, item) => fat += item.fat * item.quantity, 0),
}

const FitContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(state.items));
        dispatch(totalNutritions(state.items))
    }, [state.items])

    console.log('total Calories is: ', state.totalCalories);
    console.log('total Protein is: ', state.totalProtein);
    console.log('total Fat is: ', state.totalFat);

    return <FitContext.Provider value={{
        ...state,
        AddItem: (items) => dispatch(addItems(items)),
        clearItems: () => dispatch(clearItems()),
        incQuantity: (id) => dispatch(incQuantity(id)),
        decQuantity: (id) => dispatch(decQuantity(id)),
        editItem: (id) => dispatch(editItem(id)),
        updateItem: (item) => dispatch(updateItem(item)),
        deleteItem: (id) => dispatch(deleteItem(id)),
    }}>

        {children}
    </FitContext.Provider>
};

export default FitContextProvider;

export const useFitContext = () => {
    return useContext(FitContext);
}