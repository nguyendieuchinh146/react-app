import { useParams } from 'react-router';
const ProductListCategory = () => {
    const route_params =  useParams()
    return (
        <div>
            <h4>Product Category </h4>
            <p>{route_params.category}</p>
        </div>
    )
}

export default ProductListCategory
