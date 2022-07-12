import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product/Product'
import {ProductList, ProductDetail} from './pages/product'
import {Route} from "react-router-dom";


const routes = [
    { path: '/', component: <Home />, },
    { path: '/about', component: <About />, },
    { path: '/product', component: <Product />,
        children: [
            {
                path: 'list',
                component: <ProductList />,
            },
            {
                path: 'detail',
                component: <ProductDetail />,
            },
        ],
    },
];

const routeList = routes.map((route) =>{
    if(route.children){
        return <Route key={route.path} path={route.path} element={route.component} >
            {
                route.children.map((childen_route) => {
                    return <Route key={childen_route.path} path={childen_route.path} element={childen_route.component} />
                })
            }
        </Route>
    }else{
        return <Route key={route.path} path={route.path} element={route.component} />
    }
});

export function loadRoutes (routes){
    const routeList =<>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} ></Route>
                        <Route path='/product' element={<Product />} >
                            <Route path="list" element={<ProductList />} />
                            <Route path="detail" element={<ProductDetail />} />
                        </Route>
                    </>
    return routeList;
}

export default routeList;