import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const status = useSelector((state) => state.counter.status)
  console.log(1, 'test: ', status)

  //CURRY FUnction: functional programming patter, function inside function, lamba(lamda)
  //Closure*
  const showStud = (name, collegeName) => {
    console.log(1, 'Stud Info:', name, collegeName)
  }
  showStud('Aman', 'NSW College')
  showStud('Santosh', 'NSW College')

  const showStudCurry = (collegeName) => { //closure *
    return (name) => {
      console.log(2, 'Stud Info:', name, collegeName)
    }
  }
  const showStudCurryV2 = collegeName => name => console.log(2, 'Stud Info:', name, collegeName)
  const studNameFunc = showStudCurryV2('NSW College') //we shoudl send
  //Automatic
  studNameFunc('Aman')
  studNameFunc('Santosh')



  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      {status === 'loading' && <div>Loading...</div>}
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
