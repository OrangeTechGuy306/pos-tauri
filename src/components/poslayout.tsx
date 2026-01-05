import React, { useState } from "react"
import OrderCard from "./order-card"
import Navbar from "./nav"
import ProductCard from "./product-card"
import products from "../mocks/products.json"

interface ProductProps {
    src: string
    price: string
    quantity: string
    id: string
    name: string
    category: string
}

const POSLayout = ({children}: {children: React.ReactNode}) => {

    const [orders, setOrders] = useState<ProductProps[]>()

  return (

   <section className='grid md:grid-cols-4  bg-gray-50'>
        <main className="col-span-3">
            <Navbar />
            <div className="p-5 h-[90vh] overflow-y-scroll grid grid-cols-4 gap-5">
                {/* {children} */}
                {
                products.map((product)=>(
                    <ProductCard
                        key={product.id}
                        name={product.product_name}
                        src={product.image}
                        price={String(product.price)}
                        category={product.category}
                        quantity={product.quantity.toString()}
                        id={product.id.toString()}
                        setOrder={setOrders}
                    />
                ))
            }
            </div>
        </main>
        <aside className="md:col-span-1 p-2 flex flex-col gap-2">

            {
                orders&&orders?.length > 0 ?
                orders.map((order)=>(
                    <OrderCard
                       key={order.id}
                       name={order.name}
                       src={order.src}
                       price={order.price.toString()}
                       quantity={order.quantity}
                       id={order.id}
                    />
                ))
                :
                <div>
                    <h1>No order</h1>
                </div>
            }
        </aside>
   </section>
  )
}

export default POSLayout