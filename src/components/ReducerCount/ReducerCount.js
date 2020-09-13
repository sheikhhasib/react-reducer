import React, { useReducer, useState } from 'react';
const initialState = {count: 0};

const reducer = (state, action) =>{
    switch (action.type){
        case 'INCREMENT' :
            return {count : state.count + 1}
        case 'DECREMENT' :
            return state.count === 0 ? {count : 0} : {count : state.count - 1}
        default :
            return state;
    }
}
const ReducerCount = () => {
    const [count,setCount] = useState()
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <h1>this is reducer Count : {state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    );
};

export default ReducerCount;