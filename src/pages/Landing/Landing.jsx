
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/CarouselEffect/CarouselEffect'

function Landing() {
  return (
    <LayOut>
        <CarouselEffect/>
        <Category/>
        <Product/>
    </LayOut>
  )
}

export default Landing