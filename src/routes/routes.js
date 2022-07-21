import Login from '../pages/Login'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/product/Product'
import {ProductList, ProductDetail, ProductListCategory, ProductListOld} from '../pages/product'
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
                children: [
                    {
                        path: ':category',
                        component: <ProductListCategory />,
                    },
                    {
                        path: 'old',
                        component: <ProductListOld />,
                    }
                ]
            },
            {
                path: 'detail',
                component: <ProductDetail />,
            },
        ],
    },
];

const routeCb = (route) => {
    if(route.children){
        return <Route key={route.path} path={route.path} element={<AuthGuard component={route.component} middleware={route.middleware} />}>
            { route.children.map(routeCb) }
        </Route>
    }else{
        return <Route key={route.path} path={route.path} element={<AuthGuard component={route.component} middleware={route.middleware} />} />
    }
}
const routeList = routes.map(routeCb);


export default routeList;
