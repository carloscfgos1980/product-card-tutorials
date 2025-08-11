import Image from '../assets/burger.png'
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="product_box">
      <img src={Image} alt="Burger" />
      <div className="description">
        <h2>Burger</h2>
        <p className="price">$5.000 <span>$6.50</span></p>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus?</p>
        <button className='btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard