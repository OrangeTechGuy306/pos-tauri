import { SetStateAction } from "react"

interface ProductProps {
    src: string
    price: string
    quantity: string
    id: string
    name: string
    category: string
    setOrder: React.Dispatch<SetStateAction<Array<{
        src: string
        price: string
        quantity: string
        id: string
        name: string
        category: string
    }>>>
}

const ProductCard = ({ src, price, quantity, name, category, setOrder, id }: ProductProps) => {

    const addToOrder = (order: any) => {
        setOrder((prev)=> [...prev, order])
    }

    return (
        <div className="col-span-1 backdrop-blur-2xl rounded-lg relative border border-cyan-200">

            <div className="w-full flex justify-center items-center h-50 overflow-hidden p-3">
                <img src={src} alt={name} className="w-40" loading="lazy" />
            </div>

            <div className="px-5 flex flex-col gap-3 pt-3">
                <h2 className="text-gray-600 font-bold text-xl">{name.substring(0, 20) + "..."}</h2>
                <h1 className="font-bold text-2xl text-blue-500">
                    &#8358;{Intl.NumberFormat().format(Number(price))}
                </h1>
                
            </div>
            <div className="p-5 flex items-center justify-between">
                <h1 className="text-blue-500 font-bold">Quantity: <span>{quantity}</span></h1>
                <button
                    className="py-2 px-5 rounded-xl bg-blue-500 text-white font-bold cursor-pointer"
                    onClick={() => addToOrder({id, name, price, quantity, src})}
                >
                    Add to order
                </button>
            </div>
    
        </div>
    )
}

export default ProductCard