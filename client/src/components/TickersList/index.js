import s from './style.module.css';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { startTickers, selectTickersData, stopTickers } from '../../store/tickers';
import { useEffect } from 'react';


const TickersList = () => {
  const tickers = useSelector(selectTickersData);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(startTickers());
  },[dispatch])
  const handleStopButton = () => {
    dispatch(stopTickers());
  }
  const handleStartButton = () => {
    dispatch(startTickers());
  }
  return  (
    <>
   <table className={s.table}>
      <caption className={s.caption}>Realtime tickers price</caption>
      <thead>
        <tr>
          <th scope="col" className={s.ticker_header}>Ticker</th>
          <th scope="col" className="statistics-table-age">Price</th>
          <th scope="col" className="statistics-table-gender">Change</th>
          <th scope="col" className="statistics-table-country">Percent change</th>
        </tr>
      </thead>
      <tbody>
        {tickers.map(({ticker,price,change,change_percent}) =>
        <tr className={s.ticker} key={nanoid()}>
          <td >{ticker}</td>
          <td>{price} $</td>
          <td className={Number(change)>0?s.green:s.red}>{change} $</td>
          <td >{change_percent} %</td>
        </tr>)}
      </tbody>
    </table>
    <div className={s.buttons}>
      <button onClick={handleStopButton}>Stop</button>
      <button onClick={handleStartButton}>Start</button>
    </div>
    </>
  )
}

export default TickersList;