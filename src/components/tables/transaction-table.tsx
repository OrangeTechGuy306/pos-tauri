import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TransactionProps } from '../../types';
import moment from "moment"

const TransactionTable = ({transactions} : {transactions: TransactionProps[]}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S/NO</TableCell>
                        <TableCell>transaction ID</TableCell>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Total Price</TableCell>
                        <TableCell>payment method</TableCell>
                        <TableCell>status</TableCell>
                        <TableCell>Transaction Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions && transactions.map((transaction: TransactionProps, i: number) => (
                        <TableRow key={transaction.id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>
                               {transaction.transaction_id}
                            </TableCell>
                            <TableCell>{transaction.product_id}</TableCell>
                            <TableCell> &#8358;{Intl.NumberFormat().format(transaction.total_amount)}</TableCell>
                            <TableCell>{transaction.payment_method}</TableCell>
                            <TableCell>{transaction.status}</TableCell>
                            <TableCell>
                                {moment(transaction.transaction_date).format("DD-MM-YYYY hh:mm:ss")}
                            </TableCell>
                            <TableCell><button>view</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TransactionTable