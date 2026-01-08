
import DashboardLayout from '../components/dashboardlayout'
import InventoryTable from '../components/tables/inventory-table'
import TitleText from '../components/title-text'
import products from "../mocks/products.json"


export const Inventory = () => {
  return (
    <>
    <DashboardLayout>
        <TitleText title='Inventory' />

        <div className='h-[90vh] overflow-y-scroll mt-5'>
         <InventoryTable products={products}/>
        </div>
    </DashboardLayout>
    
    
    </>
  )
}
