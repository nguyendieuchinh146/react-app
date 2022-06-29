import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header, Footer} from './components/layouts'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product/Product'
import {ProductList, ProductDetail} from './pages/product'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
            <div className="page-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} ></Route>
                    <Route path='/product' element={<Product />} >
                        <Route path="list" element={<ProductList />} />
                        <Route path="detail" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
