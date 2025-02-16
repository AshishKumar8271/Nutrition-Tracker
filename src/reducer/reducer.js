import {
  ADD_ITEM,
  INC_QUANTITY,
  DEC_QUANTITY,
  EDIT_ITEM,
  UPDATE_ITEM,
  CLEAR_ITEMS,
  DELETE_ITEM,
  TOTAL_NUTRITIONS,
} from "../actions/actions";

const itemsInStorage = JSON.parse(localStorage.getItem('items'));

const calculateTotals = itemsInStorage.reduce(
  (nutritions, item) => {
    nutritions.totalCalories += item.calories * item.quantity;
    nutritions.totalProtein += item.protein * item.quantity;
    nutritions.totalCarbs += item.carbs * item.quantity;
    nutritions.totalFat += item.fat * item.quantity;
    return nutritions;
  },
  {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
  }
);

const initialState = {
  items: itemsInStorage,
  itemToEdit: null,
  ...calculateTotals,
};

const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case CLEAR_ITEMS: {
      return {
        ...state,
        items: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
      };
    }

    case INC_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }

    case DEC_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    }

    case EDIT_ITEM: {
      return {
        ...state,
        itemToEdit: state.items.find((item) => item.id === action.payload),
      };
    }

    case UPDATE_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
        itemToEdit: null,
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case TOTAL_NUTRITIONS: {
      const { totalCalories, totalProtein, totalCarbs, totalFat } =
        state.items.reduce(
          (nutritions, item) => {
            nutritions.totalCalories += item.calories * item.quantity;
            nutritions.totalProtein += item.protein * item.quantity;
            nutritions.totalCarbs += item.carbs * item.quantity;
            nutritions.totalFat += item.fat * item.quantity;
            return nutritions;
          },
          {
            totalCalories: 0,
            totalProtein: 0,
            totalCarbs: 0,
            totalFat: 0,
          }
        );

      return {
        ...state,
        totalCalories,
        totalProtein,
        totalCarbs,
        totalFat,
      };
    }

    default:
      return state;
  }
};

export default nutritionReducer;
