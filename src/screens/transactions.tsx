
import DashboardLayout from '../components/dashboardlayout'
import TransactionTable from '../components/tables/transaction-table'
import TitleText from '../components/title-text'
import transactions from "../mocks/transactions_30.json"


export const Transactions = () => {
  return (
    <>
    <DashboardLayout>
        <TitleText title='Transactions' />
        <div className='h-[90vh] overflow-y-scroll mt-5'>
          <TransactionTable transactions={transactions} />
        </div>
    </DashboardLayout>
    </>
  )
}


