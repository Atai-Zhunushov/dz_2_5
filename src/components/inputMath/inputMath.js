import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const InputMath = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const [inputValue , setInputValue] = useState(0)
    const [inputValue2 , setInputValue2] = useState(0)

    const inputsValue = (e) => {
        setInputValue(+e.target.value)
    }
    const inputsValue2 = (e) => {
        setInputValue2(+e.target.value)
    }

    const plusValue = () => {
        if (inputValue !== 0 && inputValue2 !== 0) {
            dispatch({
                type: "MATH_PLUS",
                payload: inputValue + inputValue2
            })
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }
    }
    const minusValue = () => {

        if (inputValue !== 0 && inputValue2 !== 0) {
            dispatch({
                type: "MATH_PLUS",
                payload: inputValue - inputValue2
            })
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }
    }
    const divideValue = () => {
        if (inputValue !== 0 && inputValue2 !== 0) {
            const result =  (inputValue / inputValue2).toFixed(2)
            dispatch({
                type: "MATH_DIVIDE",
                payload: parseFloat(result)
            })
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }
    }
    const multiplicationValue = () => {
        if (inputValue !== 0 && inputValue2 !== 0) {
            dispatch({
                type: "MATH_MULTIPLICATION",
                payload: inputValue * inputValue2
            })
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }

    }

    return (
      <div className='div'>
          <div className='input_flex'>
              <input type="number" className="input"  onChange={inputsValue} defaultValue={count} />
              <input type="number" className="input"  onChange={inputsValue2} defaultValue={count}/>
          </div>
          <div className='btn_flex'>
              <button className="btn" onClick={plusValue}>+</button>
              <button className="btn" onClick={minusValue}>-</button>
              <button className="btn" onClick={divideValue}>/</button>
              <button className="btn" onClick={multiplicationValue}>&times;</button>
          </div>
          <h1>{count}</h1>
      </div>
    );
};

export default InputMath;