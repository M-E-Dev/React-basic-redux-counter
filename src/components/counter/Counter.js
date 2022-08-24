import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrease, increase, reset } from '../../redux/actions/counterActions';

const Counter = () => {

    //Stateleri çağırmak için
    const {counter} = useSelector((state) => state.counterReducer)
    //Fonksiyonları çağırmak için
    const dispatch = useDispatch();
    console.log(counter);

  return (
    <div className='app'>
        <h2 className='counter-header' >Counter With Redux</h2>
        <h1
        // className={counter > 0 ? "counter-pos": counter < 0 ? "counter-neg" : "counter-zero"}
        >
            {counter}
        </h1>
        <div>
            {/* <button className="counter-button positive" onClick={() => dispatch({type: "INCREASE_COUNTER"}) }>increase</button> */}
            <button className="counter-button positive" onClick={() => dispatch(increase()) }>increase</button>
            <button className="counter-button zero" onClick={() => dispatch(reset()) }>reset</button>
            <button className="counter-button negative" onClick={() => dispatch(decrease()) }>decrease</button>
        </div>
    </div>
  )
}

export default Counter;