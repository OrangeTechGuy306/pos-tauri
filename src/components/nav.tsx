import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const Navbar = () => {
    return (
        <nav className="py-4 px-10 bg-white mb-5">
            <Autocomplete
                disablePortal
                options={["apple", "orange"]}
                className=''
                renderInput={(params) => <TextField {...params} label="Search product name" />}
            />
        </nav>
    )
}

export default Navbar