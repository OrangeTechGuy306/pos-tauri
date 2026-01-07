import { Link, useLocation } from "react-router-dom"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentIcon from '@mui/icons-material/Payment';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';




const Sidebar = () => {


    const location = useLocation()



    const links = [
        {
            id: 1,
            name: "Dashboard",
            url: "/dashboard",
            icon: <SpaceDashboardIcon />
        },

        {
            id: 2,
            name: "Products",
            url: "/products",
            icon: <ShoppingBasketIcon />
        },

        {
            id: 3,
            name: "Inventory",
            url: "/inventory",
            icon: <InventoryIcon />
        },

        {
            id: 4,
            name: "Transactions",
            url: "/transactions",
            icon: <ReceiptIcon />
        },
        {
            id: 5,
            name: "Order History",
            url: "/orders",
            icon: <ReceiptLongIcon/>
        },

        {
            id: 6,
            name: "Payments",
            url: "/payments",
            icon: <PaymentIcon />
        },

        {
            id: 7,
            name: "Categories",
            url: "/categories",
            icon: <CategoryIcon/>
        },

        {
            id: 8,
            name: "Accounting",
            url: "/accounting",
            icon: <LibraryBooksIcon />
        },

        {
            id: 9,
            name: "Users",
            url: "/users",
            icon: <GroupIcon />
        },

    ]


  return (
    <div className="flex flex-col gap-5">
        {
            links.map((link)=>(
                <Link to={link.url} key={link.id} className="text-gray-400 text-lg flex items-center gap-2 hover:border hover:border-blue-300 py-2 px-5 rounded-md">
                    {link.icon}
                    <span> {link.name}</span>
                </Link>
            ))
        }
    </div>
  )
}

export default Sidebar