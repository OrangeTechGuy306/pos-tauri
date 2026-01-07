import { motion } from "motion/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SplashScreen = () => {

    const navigate = useNavigate()

    const transition = {
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
    }


    const gotoPOSLogin = ()=> navigate("/pos/auth")
    const gotoDashboardLogin = ()=> navigate("/dashboard/auth")



    return (
        <div className="bg-[whitesmoke] min-h-screen flex justify-center items-center gap-10">
           

                <motion.div
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={transition as any}
                    className="bg-white"
                >
                    <button
                        className="white w-75 h-12.5 text-blue-500 cursor-pointer rounded-md hover:shadow-xl border"
                        onClick={gotoPOSLogin}
                    >
                        Login to POS
                    </button>
                </motion.div>
                <motion.div
                // initial={{}}
                >
                    <button
                        className="bg-blue-600 w-75 h-12.5 text-white cursor-pointer rounded-md hover:shadow-xl border"
                        onClick={gotoDashboardLogin}
                    >
                        Login to Dashboard
                    </button>
                </motion.div>
          

        </div>
    )
}

export default SplashScreen