import {Link, Outlet} from "react-router-dom";

const ProductList = () => {
    return (
        <div>
            <h4>Product List</h4>
            <nav class="container navbar navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to='/product/list/old'>Old</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/product/list/mobile'>Mobile</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/product/list/tablet'>Tablet</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/product/list/laptop'>Laptop</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default ProductList
