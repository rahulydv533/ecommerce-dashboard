import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import UpdateProduct from './component/UpdateProduct';
import AddProduct from './component/AddProduct';
import Protected from './component/Protected';
import ProductList from './component/ProductList';
import SearchComponent from './component/SearchComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Protected cmp={SearchComponent}/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected cmp={ProductList} />} />
          <Route path="/add" element={<Protected cmp={AddProduct} />} />
          <Route path="/update/:id" element={<Protected cmp={UpdateProduct} />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
