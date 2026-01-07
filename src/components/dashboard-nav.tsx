import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const DashboardNav = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10">
        {/* brand */}
        <div className="flex items-center gap-30 flex-wrap">
            {/* brand info */}
            <div className="flex items-center gap-2">
                <FiberSmartRecordIcon fontSize={"large"} color='primary' />
                <h1 className="text-2xl font-bold text-blue-600">Bee<span className="text-cyan-300">hive</span></h1>
            </div>
            {/* search form */}
            <form action="" className='flex items-center gap-3'>
                <input 
                    type="search" 
                    placeholder='search product...' 
                    className='w-87.5 border h-10 px-2 rounded-md border-cyan-200'
                />
                <button className='bg-linear-to-r from-primary500 to-cyan-300 text-white rounded-md h-10 px-5 flex items-center gap-3'>
                    <span>search</span>
                    <ZoomInIcon />
                </button>
            </form>
        </div>

        {/* user info */}
        <div className='flex items-center gap-5 flex-wrap'>
            <NotificationsNoneIcon style={{color: "grey"}} />
            <div className='flex items-center gap-3 flex-wrap bg-gray-200 py-2 px-5 rounded-md'>
                <div className='w-8.5 h-8.5 rounded-full border overflow-hidden'></div>
                <h1>David Brown</h1>
            </div>
        </div>
    </nav>
  )
}

export default DashboardNav