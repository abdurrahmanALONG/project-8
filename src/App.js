import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FoodItem  from './components/fooditems/FoodItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FoodItem></FoodItem>
      
    </div>
  );
}

export default App;
