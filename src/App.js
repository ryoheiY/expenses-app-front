import './App.css';
import Nav from './commponents/Nav';
import TransportationExpensesList from './commponents/Transportation/TransportationExpensesList';

function App() {
  return (
    <div className='p-10'>
      <Nav />
      <TransportationExpensesList />
    </div>
  );
}

export default App;
