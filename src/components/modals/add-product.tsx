
import CustomModalComponent from './custom-modal'
import CustomInput from '../custom-input'
import ProductCard from '../product-card'
import DropdownComponent from '../dropdown'
import { ChangeEvent, useState } from 'react'

const AddProductModal = () => {

    const [image, setImage] = useState<File>()

    return (

        <CustomModalComponent
            btnText='Add Product'
            title='Add New Product'
        >

            <div className='grid grid-cols-3 p-5 gap-5'>

                <div className='col-span-2 flex flex-col gap-5'>

                 { image ? 
                 <div className='relative w-40 h-40 rounded-md overflow-hidden flex justif-center items-center border border-gray-300'>
                    <button 
                        className='absolute right-2 top-2 font-bold text-red-500'
                        onClick={()=>setImage(undefined)}
                    >x</button>
                    <img src={URL.createObjectURL(image)} alt="" width={200}/> 
                 </div>
                 :  
                 <div className='flex flex-col'>
                        <label htmlFor="product-image" className='h-70 bg-gray-100 rounded-md flex flex-col justify-center items-center'>
                            Upload Image
                        </label>
                        <input 
                            type="file" 
                            id='product-image' 
                            className='hidden' 
                            onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                setImage(e.target.files[0])
                            }}
                        />
                    </div>
                    
                }

                    <CustomInput
                        type='text'
                        placeholder='Enter product name'
                        label='Product Name'
                    />

                    <CustomInput
                        type='number'
                        placeholder='Enter product price'
                        label='Product Price'
                    />

                    <CustomInput
                        type='number'
                        placeholder='Enter product quantity'
                        label='Product Quantity'
                    />

                    <DropdownComponent
                        label='Category'
                        items={["Mobiles", "PC", "Gadgets"]}
                    />
                </div>

                <div>
                    <ProductCard
                        setOrder={"" as any}
                        key={""}
                        name={""}
                        src={""}
                        price={""}
                        category={""}
                        quantity={""}
                        id={""}
                    />
                </div>
            </div>



        </CustomModalComponent>
    )
}

export default AddProductModal