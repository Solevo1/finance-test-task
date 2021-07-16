import './App.css';
import TickersList from './components/TickersList';
import IntervalForm from './components/IntervalForm';

const App = () => {
  return (
    <div className="App">
      <TickersList />
      <IntervalForm />
    </div>
  );
}

export default App;
