import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CategoryProps} from "../../types";
import CustomModalComponent from "../modals/custom-modal";

const CategoryTable = ({category} : {category: CategoryProps[]}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/NO</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category &&
            category.map((category: CategoryProps, i: number) => (
              <TableRow key={category.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center h-7 w-7 rounded-full overflow-hidden">
                    <img src={category.image} loading="lazy" alt="" />
                  </div>
                </TableCell>
                <TableCell>{category.category_id}</TableCell>
                {/* <TableCell>
                  {" "}
                  &#8358;{Intl.NumberFormat().format(category.price)}
                </TableCell> */}
                <TableCell>{category.description}</TableCell>
                <TableCell>{category.status}</TableCell>
                <TableCell>
                  <CustomModalComponent btnText='view cat'
            title='Category Details'/>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryTable;
