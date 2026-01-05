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



    return (
        <div className="bg-[url(/assets/splash3.jpeg)] bg-cover bg-center min-h-screen flex justify-center items-center gap-10">
            <div className="backdrop-blur-md p-20 shadow-2xl rounded-md flex flex-col gap-5">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={transition as any}
                >
                    <button
                        className="backdrop-blur-sm w-75 h-12.5 text-white cursor-pointer rounded-md hover:shadow-xl border"
                        onClick={gotoPOSLogin}
                    >
                        Login to POS
                    </button>
                </motion.div>
                <motion.div
                // initial={{}}
                >
                    <button
                        className="backdrop-blur-sm w-75 h-12.5 text-white cursor-pointer rounded-md hover:shadow-xl border">
                        Login to Dashboard
                    </button>
                </motion.div>
            </div>

        </div>
    )
}

export default SplashScreen