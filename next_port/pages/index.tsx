// @ts-nocheck
import { Container } from '../styles/styles.js'
import Header from '../src/components/header'
import Cursor from '../src/common/cursor/Cursor'
import Main from '../src/components/main'
import Footer from '../src/components/footer'
import { useState, useRef } from "react";
import Eye from '../src/components/svgComponent/Eye'
import useMouse from "@react-hook/mouse-position";

export default function Home() {

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [bgVariant,setBgVariant] = useState("default")
  const [pathVariant,setPathVariant] = useState("light")
  const [textVariant,setTextVariant] = useState("light")


  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  let mouseXPosition =  mouse.clientX;
  let mouseYPosition =  mouse.clientY;

  if (mouse.x !== null) {
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
      fontSize: "16px",
      backgroundColor: "#f2f2f2",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    about: {
      opacity: 1,
      backgroundColor: "rgba(151, 126, 242, .15)", 
      filter: "blur(1px)",
      color: "White",
      border: "1px solid rgba(151, 126, 242, 5)",
      height: 100,
      width: 100,
      fontSize: "12px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      x: mouseXPosition -50 ,
      y: mouseYPosition -50
    },
    work: {
      opacity: 1,
      backgroundColor: "rgba(151, 126, 242, 0.2)",
      color: "#000",
      height: 100,
      width: 100,
      border: "1px solid rgba(151, 126, 242, 5)",
      fontSize: "18px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      x: mouseXPosition -50 ,
      y: mouseYPosition -50
    },
    header: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      x: mouseXPosition -40 ,
      y: mouseYPosition -40
    },
    contact: {
      opacity: 1,
      backgroundColor: "rgba(151, 126, 242, .15)", 
      filter: "blur(1px)",
      color: "White",
      border: "1px solid rgba(151, 126, 242, 5)",
      height: 100,
      width: 100,
      fontSize: "12px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      x: mouseXPosition -50 ,
      y: mouseYPosition -50
    }
  };


  const bgVariants={
    default:{
      backgroundColor: "#050A18"
    },
    secondary:{
      backgroundColor: "#bcc3d1"
    }
  }
  const textVariants={
    dark:{
      color: "#050A18"
    },
    light:{
      color: "#f2f2f2"
    }
  }
  const pathVariants ={
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


  return (
    <Container ref={ref}>
      <Cursor variants={mouseVariants} animate={cursorVariant}
          transition={spring} cursorText={cursorText} />
      <Header 
      textAnimate={textVariant}
      textVariants={textVariants}
      bgVariant={bgVariants} 
      animate={bgVariant}
          transition={spring}
      onMouseEnter={headerEnter}
            onMouseLeave={mouseLeave} 
            animatePath={pathVariant}
            />
      <Main onMouseEnter={contactEnter}
            onMouseLeave={mouseLeave}
            bgVariant={bgVariants} 
      animate={bgVariant}
          transition={spring}
          textAnimate={textVariant}
          textVariants={textVariants}
          animatePath={pathVariant}
            />
      <Footer
      bgVariant={bgVariants} 
   pathVariants ={pathVariants}
   animatePath={pathVariant}
      animate={bgVariant}
          transition={spring}
          textAnimate={textVariant}
          textVariants={textVariants}
      aboutEnter={aboutEnter}
          aboutLeave={mouseLeave}
          workEnter={workEnter}
          workLeave={mouseLeave}
          />
    </Container>
  )
}
