
import DashboardLayout from '../components/dashboardlayout'
import TitleText from '../components/title-text'
import ProductCard from "../components/product-card"
import products from "../mocks/products.json"
import CustomModalComponent from '../components/modals/custom-modal'
import CustomInput from '../components/custom-input'
import DropdownComponent from '../components/dropdown'
import AddProductModal from '../components/modals/add-product'


const ProductScreen = () => {

    
    return (
        <DashboardLayout>

            <div className='flex justify-between p-5'>
                <TitleText title='Products' />
                <AddProductModal />
            </div>

            <div className='grid grid-cols-4 mt-5 h-[90vh] overflow-y-scroll gap-4'>
                {
                    products.map((product) => (
                        <ProductCard
                            setOrder={product.id as any}
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