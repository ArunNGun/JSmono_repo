import React from 'react';
import Header from '../src/components/header'
import Cursor from '../src/common/cursor/Cursor'
import { ContainerStyles } from '../src/components/Container/styles'
import useCursor from '../src/hooks/useCursor';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Layout = ({ children }) => {


    ///
    const {
        cursorText,
        cursorVariant,
        ref,
        headerEnter,
        mouseLeave,
        mouseVariants,
        bgVariant,
        pathVariant,
        textVariant
    } = useCursor()

    ////



    const bgVariants = {
        default: {
            backgroundColor: "#050A18"
        },
        secondary: {
            backgroundColor: "#bcc3d1"
        },
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
    }
    const textVariants = {
        dark: {
            color: "#050A18"
        },
        light: {
            color: "#E3ECFF"
            // color: "#f2f2f2"
        }
    }
    const pathVariants = {
        light: {
            fill: 'red',
        },
        dark: {
            fill: 'green',
        },
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    }
    const ease = {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.3
    }

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <ContainerStyles ref={ref} >
                    <Cursor variants={mouseVariants} animate={cursorVariant}
                        transition={spring} cursorText={cursorText} />
                    <Header
                        textAnimate={textVariant}
                        textVariants={textVariants}
                        bgVariant={bgVariants}
                        animate={bgVariant}
                        transition={ease}
                        onMouseEnter={headerEnter}
                        onMouseLeave={mouseLeave}
                        animatePath={pathVariant}
                    />
                    {children}
                </ContainerStyles>
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}

export default Layout;