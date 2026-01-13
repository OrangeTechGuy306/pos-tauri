
import DashboardLayout from '../components/dashboardlayout'
import OrderHistory from '../components/tables/order-history'
import TitleText from '../components/title-text'

import  orderHistoryData from "../mocks/order-history.json"

const Orders = () => {
    
  return (
    <>
    <DashboardLayout>
        <TitleText title='Orders' />

        <div className='h-[90vh] overflow-y-scroll mt-5'>
            <OrderHistory Orders ={orderHistoryData}/>
        </div>
    </DashboardLayout>
    </>
  )
}

export default Orders
