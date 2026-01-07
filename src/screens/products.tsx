
import DashboardLayout from '../components/dashboardlayout'
import TitleText from '../components/title-text'
import ProductCard from "../components/product-card"
import products from "../mocks/products.json"


const ProductScreen = () => {
    return (
        <DashboardLayout>
            <TitleText title='Products' />
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