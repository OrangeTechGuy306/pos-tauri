import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductProps } from '../../types';
import CustomModalComponent from '../modals/custom-modal';

const InventoryTable = ({products}:{products: ProductProps[]}) => {

    

  return (
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/NO</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>category</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>SKU</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products&&products.map((product: ProductProps, i: number) => (
            <TableRow key={product.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                <div className='flex justify-center items-center h-7 w-7 rounded-full overflow-hidden'>
                    <img src={product.image} loading='lazy' alt="" />
                </div>
              </TableCell>
              <TableCell>{product.product_name}</TableCell>
              <TableCell> &#8358;{Intl.NumberFormat().format(product.price)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>
                <CustomModalComponent  btnText='View'
            title='inventory details'/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InventoryTable