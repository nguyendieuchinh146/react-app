import { useReducer } from "react";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import ReactDOM from "react-dom/client";


// test reducer

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
    if (action.type === 'counter/increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    return state
}

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())

store.dispatch({ type: 'counter/increment' })

console.log(store.getState())

const increment = () => {
    return {
        type: 'counter/increment'
    }
}

store.dispatch(increment())

console.log(store.getState())

const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)




const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: true,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function MyReducer() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            data-check={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title} - {todo.complete
                    }
                    </label>
                </div>
            ))}
        </>
    );
}
export default MyReducer;