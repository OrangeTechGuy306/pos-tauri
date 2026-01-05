
import POSLayout from "../components/poslayout"
import ProductCard from "../components/product-card"
import products from "../mocks/products.json"


const PosScreen = () => {

    


  return (

    <POSLayout>

        <div className="grid grid-cols-4 gap-5">
            {/* {
                products.map((product)=>(
                    <ProductCard
                        key={product.id}
                        name={product.product_name}
                        src={product.image}
                        price={String(product.price)}
                        category={product.category}
                        quantity={product.quantity.toString()}
                        id={product.id.toString()}
                    />
                ))
            } */}
            
        </div>
    </POSLayout>
  )
}

export default PosScreen