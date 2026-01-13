import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PaymentProps} from '../../types';
import moment from "moment"

const PaymentTable = ({payments} : {payments : PaymentProps[]}) => {
  return (
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S/NO</TableCell>
                        <TableCell>Payment ID</TableCell>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Amount paid</TableCell>
                       <TableCell>payment Status</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell>Payment Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {payments && payments.map((payment: PaymentProps, i: number) => (
                        <TableRow key={payment.id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{payment.payment_id}</TableCell>
                            <TableCell>
                               {payment.transaction_id}
                            </TableCell>
                            <TableCell>{payment.order_id}</TableCell>
                            <TableCell> &#8358;{Intl.NumberFormat().format(payment.payment_amount)}</TableCell>
                            <TableCell>{payment.payment_status}</TableCell>
                            <TableCell>{payment.payment_method}</TableCell>
                            <TableCell>
                                {moment(payment.payment_date).format("DD-MM-YYYY hh:mm:ss")}
                            </TableCell>
                            <TableCell><button>view</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
}

export default PaymentTable