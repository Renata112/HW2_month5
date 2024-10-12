import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract, multiply, divide} from "../redux/reducer/actions";
import css from './counter.css'


const Counter = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const result = useSelector ((state)=> state.result);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch (add(value1, value2))
    };
    const handleSubtract = () => {
        dispatch(subtract(value1,value2))
    };
    const handleMultiply = ()=>{
        dispatch(multiply(value1,value2))
    };
    const handleDivision =()=>{
        dispatch(divide(value1,value2))
    }

    return (
        <div className="buttons">
            <h1>Calculator</h1>
            <input type="number" value = {value1} onChange={(e) => setValue1(Number(e.target.value))} />
            <input type="number" value={value2} onChange = {(e) => setValue2(Number(e.target.value))}/>

            <button onClick = {handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleMultiply}>*</button>
            <button onClick={handleDivision}>/</button>

            <div>Result: {result}</div>
        </div>
    );
}

export default Counter;