import { ReactNode } from "react"
import DashboardNav from "./dashboard-nav"
import Sidebar from "./sidebar"


const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <DashboardNav />

    <section className='grid grid-cols-5 bg-[whitesmoke]'>
        <aside className="col-span-1 h-screen bg-white p-10">
            <Sidebar />
        </aside>


        <main className="col-span-4 h-screen p-5">{children}</main>

        {/* <article className="col-span-1 bg-white h-screen"></article> */}
    </section>
    </>
  )
}

export default DashboardLayout