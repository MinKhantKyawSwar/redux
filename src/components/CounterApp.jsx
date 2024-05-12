import React from 'react'
import { useSelector, useDispatch } from "react-redux"

const CounterApp = () => {
    
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const isShow = useSelector(state => state.isShow)


    const increaseHandler = () => {
        dispatch({type: 'increase'})
    }

    const decreaseHandler = () => {
        dispatch({type: 'decrease'})

    }

    const increaseBy5Handler = () => {
        dispatch({type : 'increaseBy5', amount : 5})
    }

    const toggleHandler = () => {
       dispatch({type : "toggle"})
    }

  return (
    <section>
        <h3>Redux</h3>
        {isShow && <h1>{counter}</h1>}
        <hr />
        <div className='div'>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={increaseBy5Handler}>Increase by 5</button>
            <button onClick={decreaseHandler}>Decrease</button>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    </section>
  )
}

export default CounterApp