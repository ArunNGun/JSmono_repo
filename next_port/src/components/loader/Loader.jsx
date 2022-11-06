import { motion } from 'framer-motion';
import react, { useEffect } from 'react';
import Box from '../../common/Box/Box'
import MainAni from '../main/MainAni';
const Loader = ({ setLoading }) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 1600)

    //     return () => clearTimeout(timer)

    // })

    const container = {
        hidden: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 3
            }
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 3
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                ease: "easeInOut",
                duration: 3
            }
        }
    };

    return (
        <motion.div
            className='bablu'
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => setLoading(false)}
            layoutId="main-image-1"
        >
            <MainAni />
        </motion.div>
        // <Box
        //     vairants={Container}
        //     initial='hidden'
        //     animate='show'
        //     exit='exit' height="100vh" width="100vh" top="0" left="0"
        //     onAnimationComplete={() => setLoading(false)}
        // >
        //     <MainAni vairants={loaderVariant} layoutId="main-image-1" />
        // </Box>
    )
}
export default Loader;