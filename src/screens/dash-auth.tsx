import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';




const DashboardAuthScreen = () => {

    const navigate = useNavigate()

    const goBack = () => navigate("/")


    return (
        <div className='grid grid-cols-2 min-h-screen'>


            {/* LOGIN FORM */}
            <div className='p-10 flex justify-center items-center'>
                <form action="" className='flex flex-col gap-7 w-full'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl text-cyan-500'>Login</h1>
                        <small className='text-gray-500 text-md'>Authorize user login form</small>
                    </div>
                    <div className='flex flex-col'>
                        <TextField placeholder="Enter your email..." label="Email" variant="outlined" type='email' />
                    </div>
                    <div className='flex flex-col'>
                        <TextField placeholder="Enter your password..." label="Password" variant="outlined" type='email' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className="cursor-pointer rounded-md hover:shadow-xl bg-linear-to-r from-primary500 to-cyan-300 py-2 px-10 text-white">
                            sign in
                        </button>
                        <Link to={"/dashboard"}>Go to Dashboard</Link>
                    </div>
                </form>
            </div>


            <div className='h-screen bg-[url(/assets/cyan-dash.jpeg)] bg-center bg-cover p-10'>
                <button
                    className="text-white flex items-center backdrop-blur-xl cursor-pointer"
                    onClick={goBack}
                >
                    <KeyboardArrowLeftIcon /> <span>Back</span>
                </button>
            </div>


        </div>
    )
}

export default DashboardAuthScreen