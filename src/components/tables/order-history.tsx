import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrderProps } from "../../types";
import moment from "moment";
import CustomModalComponent from "../modals/custom-modal";

const OrderHistory = ({ Orders }: { Orders: OrderProps[] }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Total Items</TableCell>
              <TableCell>Order Total</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Orders &&
              Orders.map((order: OrderProps, i: number) => (
                <TableRow key={order.order_id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{order.order_id}</TableCell>
                  <TableCell>{order.transaction_id}</TableCell>
                  <TableCell>
                    {order.items.map((item) => item.product_name).join(", ")}
                  </TableCell>
                  <TableCell>{order.total_items}</TableCell>
                  <TableCell>
                    ₦{Intl.NumberFormat().format(order.order_total)}
                  </TableCell>
                  <TableCell>{order.payment.method}</TableCell>
                  <TableCell>{order.order_status}</TableCell>
                  <TableCell>
                    {moment(order.transaction_date).format(
                      "DD-MM-YYYY HH:mm:ss"
                    )}
                  </TableCell>
                  <TableCell>
                    <button><CustomModalComponent  btnText='view order'
            title='view order datails'/></button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderHistory;
