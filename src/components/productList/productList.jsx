import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='productlist'>
        <div className="productlist-text">
            <h1 className="productlist-title">Here are some fake things I've made</h1>
            <p className="productlist-description">
            A death-white wasteland stretches from horizon to horizon. 
               The tremendous heat of two huge twin suns settle on a lone 
               figure, Luke Skywalker, a farm boy with heroic aspirations 
               who looks much younger than his eighteen years. His shaggy 
               hair and baggy tunic give him the air of a simple but lovable 
               lad with a prize-winning smile.
            </p>
        </div>
        <div className="productlist-list">
            {products.map((item)=> (
              <Product key= {item.id} img={item.img} link={item.link} />
            ))}     
        </div>    
    </div>
  )
}

export default ProductList
