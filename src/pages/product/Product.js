import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Outlet  } from 'react-router-dom'
const Product = () => {
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchProducts()
        }

        getTasks()

    }, [])
    const fetchProducts = async () => {
        const res = await fetch('http://localhost/jwt/products/list.php')
        const data = await res.json()

        return data
    }
    return (
        <div>
            <h4>Product</h4>
            <Link to='/product/list'>Product List</Link>
            <Link to='/product/detail'>Product Detail</Link>
            <Outlet />
        </div>
    )
}

export default Product
