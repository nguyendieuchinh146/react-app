import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header, Footer} from './components/layouts'
import MyForm from './components/MyForm'
import MyReducer from './components/MyReducer'
import Counter from './features/counter/Counter'
import PostsList from './features/post/PostsList'
import AddPostForm from './features/post/AddPostForm'
import routeList from './routes'
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product/Product";
import {ProductDetail, ProductList} from "./pages/product";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
            {/*<MyForm />*/}
            {/*<MyReducer />*/}
            {/*<AddPostForm />*/}
            {/*<PostsList />*/}
            {/*<Counter />*/}
            <div className="page-content">
                <Routes>
                    {routeList}
                    {/*<Route path='/' element={<Home />} />*/}
                    {/*<Route path='/about' element={<About />} />*/}
                    {/*<Route path='/product' element={<Product />} >*/}
                    {/*    <Route path="list" element={<ProductList />} />*/}
                    {/*    <Route path="detail" element={<ProductDetail />} />*/}
                    {/*</Route>*/}
                </Routes>
            </div>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
