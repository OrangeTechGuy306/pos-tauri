interface orderProps{
    id: string
    src: string
    name: string
    price: string
    quantity: string
}

const OrderCard = ({id, price, src, name, quantity}: orderProps) => {
  return (

    <div className='flex items-center gap-3 bg-white backdrop-blur-2xl rounded-xl shadow p-1'>

        <div className="w-25 h-25 rounded-md overflow-hidden flex justify-center items-center">
            <img src={src} alt="" className="md:w-20 w-10"/>
        </div>

        <div>
            <h1>{name.substring(0, 15) + "..."}</h1>
            <h1 className="font-bold text-xl text-gray-700">
                &#8358;{Intl.NumberFormat().format(Number(price))}
            </h1>
        </div>
       
       <div className="flex items-center gap-2">
            <button 
                className="w-8 h-8 flex justify-center items-center bg-blue-50 cursor-pointer"
            >
                +
            </button>
                <input type="number" disabled value={quantity}  className="w-8 h-8"/>
            <button className="w-8 h-8 flex justify-center items-center bg-blue-50 cursor-pointer">-</button>
       </div>
    </div>
  )
}

export default OrderCard