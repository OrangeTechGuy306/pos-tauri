import DashboardLayout from '../components/dashboardlayout';
import PaymentTable from '../components/tables/payment-table';
import TitleText from '../components/title-text';
import payments from "../mocks/payment.json";

const Payments = () => {
  return (
    <DashboardLayout>
      <TitleText title='Payments' />
      <div className='h-[90vh] overflow-y-scroll mt-5'>
        <PaymentTable payments={payments} />
      </div>
    </DashboardLayout>
  );
};

export default Payments;

