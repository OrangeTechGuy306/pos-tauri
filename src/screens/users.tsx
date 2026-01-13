
import DashboardLayout from '../components/dashboardlayout'
import UserTable from '../components/tables/user-table'
import TitleText from '../components/title-text'
import user from "../mocks/user.json"

const Users = () => {
  return (
    <>
    <DashboardLayout>
        <TitleText title='Users' />
        <div className='h-[90vh] overflow-y-scroll mt-5'>
          <UserTable user={user} />
        </div>
    </DashboardLayout>
    </>
  )
}

export default Users