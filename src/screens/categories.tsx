
import DashboardLayout from '../components/dashboardlayout'
import CategoryTable from '../components/tables/category-table'
import TitleText from '../components/title-text'
import category from "../mocks/category.json"

export const Categories = () => {
  return (
    <>
     <DashboardLayout>
        <TitleText title='Categories' />

         <div className='h-[90vh] overflow-y-scroll mt-5'>
         <CategoryTable category={category}/>
        </div>
     </DashboardLayout>
    
    
    
    </>
  )
}
