import s from './style.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTickers } from '../../store/tickers';


const IntervalForm = () => {
  const inputEl = useRef(null);
   const dispatch = useDispatch();
   const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(updateTickers(Number(inputEl.current.value)*1000));
  }
  return  (
   <form onSubmit={handleSubmitForm} className={s.form}>
    <label htmlFor='input' className={s.label}>Change interval(seconds):</label>
    <input  ref={inputEl} id='input' type='number' min='1' max='10' required className={s.input}></input>
    <button type='submit' className={s.button}>Submit</button>
  </form>
  )
}

export default IntervalForm;