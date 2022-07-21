import Login from '../pages/Login'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/product/Product'
import {ProductList, ProductDetail} from '../pages/product'
import {Route} from "react-router-dom";
import AuthGuard from './AuthGuard'

const routes = [
    { path: '/login', component: <Login />},
    { path: '/', component: <Home />, middleware : ['ProductPermission',]},
    { path: '/about', component: <About />, middleware : ['ProductPermission']},
    { path: '/product', component: <Product />, middleware : ['AuthenticateLogin', 'ProductPermission'],
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
        return <Route key={route.path} path={route.path} element={<AuthGuard component={route.component} middleware={route.middleware} />}>
            {
                route.children.map((childen_route) => {
                    return <Route key={childen_route.path} path={childen_route.path} element={childen_route.component} />
                })
            }
        </Route>
    }else{
        return <Route key={route.path} path={route.path} element={<AuthGuard component={route.component} middleware={route.middleware} />} />
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
