// @ts-nocheck
import { Container } from '../styles/styles.js'
import Header from '../src/components/header'
import Cursor from '../src/common/cursor/Cursor'
import Main from '../src/components/main'
import Footer from '../src/components/footer'
import { useState, useRef } from "react";
import Eye from '../src/components/svgComponent/Eye'
import useMouse from "@react-hook/mouse-position";
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Loader from '../src/components/loader/Loader'

export default function Home() {

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [bgVariant,setBgVariant] = useState("default")
  const [pathVariant,setPathVariant] = useState("light")
  const [textVariant,setTextVariant] = useState("light")
const [loading,setLoading] = useState(true)
  //temp

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
      backgroundColor: "rgba(255, 255, 255, 1)",
      // color: "#f2f2f2",
      // filter: "invert(1)",
      // mixBlendMode: "difference",
      // backgroundColor: "yellow",
      mixBlendMode: "difference",
      height: 60,
      width: 60,
      fontSize: "18px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      x: mouseXPosition -30 ,
      y: mouseYPosition -30
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
      color: "#E3ECFF"
      // color: "#f2f2f2"
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
  const ease = {
    ease:[0.6,0.01,-0.05,0.9],
    duration: 0.3
  };


  return (
    <AnimateSharedLayout type="crossfade">

    <AnimatePresence>
      {loading ? (
      <motion.div key="loader">
        <Loader setLoading={setLoading} />
      </motion.div>
        ):( 
    <Container ref={ref}>
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
   pathVariants ={pathVariants}
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
    </Container>
      )
    }
    </AnimatePresence>
    </AnimateSharedLayout>

  )
}
