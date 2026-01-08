
import DashboardLayout from '../components/dashboardlayout'
import TitleText from '../components/title-text'
import ProductCard from "../components/product-card"
import products from "../mocks/products.json"


const ProductScreen = () => {
    return (
        <DashboardLayout>

            <div className='flex justify-between p-5'>
            <TitleText title='Products' />
             <button className='bg-linear-to-r from-primary500 to-cyan-300 text-white rounded-md h-10 px-5'>Add to Products</button>
            </div>
             
            <div className='grid grid-cols-4 mt-5 h-[90vh] overflow-y-scroll gap-4'>
                {
                    products.map((product) => (
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
                }

            </div>
        </DashboardLayout>
    )
}

export default ProductScreen