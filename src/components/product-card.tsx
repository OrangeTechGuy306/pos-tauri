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
        <div className="col-span-1 bg-white rounded-md relative border border-cyan-200">
            <div className="w-full flex justify-center items-center h-70 overflow-hidden">
                <img src={src} alt={name} className="w-40" loading="lazy" />
            </div>
            <div className="px-5 flex flex-col gap-3">
                <h2 className="text-gray-600 font-bold">{name.substring(0, 20) + "..."}</h2>
                <h1 className="font-bold text-2xl text-primary500">
                    &#8358;{Intl.NumberFormat().format(Number(price))}
                </h1>
                <h1>quantity: <span>{quantity}</span></h1>
            </div>
            <div className="p-5">
                <button
                    className="py-2 px-5 rounded-xl from-cyan-300 to-blue-500 bg-linear-to-r text-white font-bold cursor-pointer"
                    onClick={() => addToOrder({id, name, price, quantity, src})}
                >
                    Add to order
                </button>
            </div>
            {/* label */}
            <div className="rounded-xl py-2 px-5 absolute top-5 right-2 bg-amber-600 text-white ">
                <h1>{category}</h1>
            </div>
        </div>
    )
}

export default ProductCard