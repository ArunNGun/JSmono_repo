import useMouse from "@react-hook/mouse-position";
import { useRef, useState } from "react";


const useCursor = () => {
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
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }
    /////
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
            zIndex: 99,
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
            zIndex: 99,
            justifyContent: "center",
            x: mouseXPosition - 50,
            y: mouseYPosition - 50
        },
        work: {
            opacity: 1,
            backgroundColor: "rgba(151, 126, 242, 0.2)",
            color: "#000",
            height: 100,
            zIndex: 99,
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
            zIndex: 99,
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
            zIndex: 99,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            x: mouseXPosition - 50,
            y: mouseYPosition - 50
        }
    };

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



    return {
        cursorText,
        cursorVariant,
        ref,
        aboutEnter,
        contactEnter,
        headerEnter,
        workEnter,
        mouseLeave,
        mouseVariants,
        bgVariant,
        pathVariant,
        textVariant
    }


}

export default useCursor