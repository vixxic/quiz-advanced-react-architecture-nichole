import { createContext, useReducer, useEffect } from "react";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser || null,
  isAuthenticated: !!savedUser,
  cart: savedCart,
  totalItems: savedCart.reduce((total, item) => total + item.quantity, 0),
  totalPrice: savedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  ),
  lastOrder: null,
};

// Reducer

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
    case "LOGOUT":
      localStorage.removeItem("cart");
      localStorage.removeItem("user");

      return {
        ...initialState,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemToRemove) return state;

      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        cart: filteredCart,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice:
          state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case "DECREMENT_QTY":
      const item = state.cart.find((i) => i.id === action.payload.id);

      if (item.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((i) => i.id !== action.payload.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - item.price,
        };
      }

      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - item.price,
      };

    default:
      return state;
  }
}

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
