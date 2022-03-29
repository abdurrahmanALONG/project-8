import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FoodItem  from './components/fooditems/FoodItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FoodItem></FoodItem>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
