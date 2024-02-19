
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import OrderStatus from './components/OrderStatus/OrderStatus';
import OrdersTab from './components/OrdersTab/OrdersTab';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className='orde'>
        <OrdersTab/>
        <OrderStatus/>
      </div>
    </div>
  );
}

export default App;