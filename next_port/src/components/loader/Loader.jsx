import react, { useEffect } from 'react';
import Box from '../../common/Box/Box'
import MainAni from '../main/MainAni';
const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1600)

        return () => clearTimeout(timer)

    })

    const loaderVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.8
            }
        }
    }
    const Container = {
        show: {
            opacity: 1
        }
    }

    return (
        <Box
            vairants={Container}
            initial='hidden'
            animate='show'
            exit='exit' height="100vh" width="100vh" top="0" left="0"
            onAnimationComplete={() => setLoading(false)}
        >
            <MainAni vairants={loaderVariant} layoutId="main-image-1" />
        </Box>
    )
}
export default Loader;