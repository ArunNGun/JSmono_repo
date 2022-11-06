import React from 'react';
import Header from '../header'
import Cursor from '../../common/cursor/Cursor'
import Main from '../main'
import Footer from '../footer'
import useMouse from "@react-hook/mouse-position";
import { useState, useRef } from "react";
import { ContainerStyles } from './styles'

const Container = () => {
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");
    const [bgVariant, setBgVariant] = useState("default")
    const [pathVariant, setPathVariant] = useState("light")
    const [textVariant, setTextVariant] = useState("light")

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = mouse.clientX;
    let mouseYPosition = mouse.clientY;

    if (mouse.x !== null) {
        console.log(mouse.clientX)
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }
    /////
    function aboutEnter(event) {
        // onHoverFooter();
        setTextVariant("dark");
        setPathVariant("dark");
        setBgVariant("secondary")
        setCursorText("About");
        setCursorVariant("about");
    }

    function mouseLeave(event) {
        // onLeaveFooter();
        setTextVariant("light");
        setPathVariant("light");
        setBgVariant("default")
        setCursorText("");
        setCursorVariant("default");
    }

    function contactEnter(event) {
        setCursorText("Contact");
        setCursorVariant("contact");
    }

    function headerEnter(event) {
        setCursorText("");
        setCursorVariant("header");
    }

    function workEnter(event) {
        setCursorText("eye");
        setCursorVariant("work");
    }



    ////

    const mouseVariants = {
        default: {
            opacity: 1,
            height: 10,
            width: 10,
            position: "absolute",
            fontSize: "16px",
            backgroundColor: "#f2f2f2",
            mixBlendMode: "difference",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        about: {
            opacity: 1,
            // backgroundColor: "rgba(151, 126, 242, .15)",
            backgroundColor: "rgba(151, 126, 242, 0.2)",
            // filter: "blur(1px)",
            color: "White",
            color: "rgba(151, 126, 242, 5)",
            border: "1px solid rgba(151, 126, 242, 5)",
            height: 100,
            width: 100,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            x: mouseXPosition - 50,
            y: mouseYPosition - 50
        },
        work: {
            opacity: 1,
            backgroundColor: "rgba(151, 126, 242, 0.2)",
            color: "#000",
            height: 100,
            width: 100,
            border: "1px solid rgba(151, 126, 242, 5)",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            x: mouseXPosition - 50,
            y: mouseYPosition - 50
        },
        header: {
            opacity: 1,
            backgroundColor: "rgba(255, 255, 255, 1)",
            // filter: "invert(1)",
            // mixBlendMode: "difference",
            // backgroundColor: "yellow",
            mixBlendMode: "difference",
            height: 60,
            width: 60,
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            x: mouseXPosition - 30,
            y: mouseYPosition - 30
        },
        contact: {
            opacity: 1,
            // backgroundColor: "rgba(151, 126, 242, .15)",
            backgroundColor: "rgba(151, 126, 242, 0.2)",
            // filter: "blur(1px)",
            color: "rgba(151, 126, 242, 5)",
            border: "1px solid rgba(151, 126, 242, 5)",
            height: 100,
            width: 100,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            x: mouseXPosition - 50,
            y: mouseYPosition - 50
        }
    };


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
    };
    const ease = {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.3
    };

    return (
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
            <Main onMouseEnter={contactEnter}
                onMouseLeave={mouseLeave}
                bgVariant={bgVariants}
                animate={bgVariant}
                transition={ease}
                textAnimate={textVariant}
                textVariants={textVariants}
                animatePath={pathVariant}
            />
            <Footer
                bgVariant={bgVariants}
                pathVariants={pathVariants}
                animatePath={pathVariant}
                animate={bgVariant}
                transition={ease}
                textAnimate={textVariant}
                textVariants={textVariants}
                aboutEnter={aboutEnter}
                aboutLeave={mouseLeave}
                workEnter={workEnter}
                workLeave={mouseLeave}
            />
        </ContainerStyles>
    );
}

export default Container;