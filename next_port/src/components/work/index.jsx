import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import MainAni from '../main/MainAni';
import { color, space, layout } from 'styled-system'


const WorkContainer = styled(motion.div)`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    `
const CommingSoon = styled(motion.div)`
height:100%;
width:100%
display:flex;
flex-direction:column;
`
const Glass = styled(motion.div)`
position:absolute;
top:21%;
left:19%;
height: 40%;
width: 70%;
background: radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%);;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.9px);
-webkit-backdrop-filter: blur(5.9px);
border: 1px solid rgba(255, 255, 255, 0.57);
// font-family: 'Alfa Slab One', cursive;
font-family: 'Space Grotesk';

display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 4em;
`
const Glass1 = styled(motion.div)`
position:absolute;
top:23%;
left:17%;
height: 40%;
width: 70%;
background: radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%);;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.9px);
-webkit-backdrop-filter: blur(5.9px);
border: 1px solid rgba(255, 255, 255, 0.57);
// font-family: 'Alfa Slab One', cursive;
font-family: 'Space Grotesk';

display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 4em;
`
const Glass2 = styled(motion.div)`
position:absolute;
top:25%;
left:15%;
height: 40%;
width: 70%;
background: radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%);;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.9px);
-webkit-backdrop-filter: blur(5.9px);
border: 1px solid rgba(255, 255, 255, 0.57);
// font-family: 'Alfa Slab One', cursive;
font-family: 'Space Grotesk';

display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 4em;
`
const Glass3 = styled(motion.div)`
position:absolute;
top:27%;
left:13%;
height: 40%;
width: 70%;
background:radial-gradient(100% 128.38% at 100% 100%, rgba(51, 168, 253, 0.2) 0%, rgba(76, 0, 200, 0.2) 100%);;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.9px);
-webkit-backdrop-filter: blur(5.9px);
border: 1px solid rgba(255, 255, 255, 0.57);
// font-family: 'Alfa Slab One', cursive;
font-family: 'Space Grotesk';

display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 4em;
    z-Index:3;
`
const Circle = styled(motion.div)`
width: 20rem;
  height: 20rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.1)
  );
  position: absolute;
  left:${({ left }) => left};
  top:${({ top }) => top};
  bottom:${({ bottom }) => bottom};
  right:${({ right }) => right};

  ${color}
${space}
${layout}
`

const circleVariants = {
    hidden: {
        x: -20,
        y: -50,
        opacity: 0,
        scale: 0
    },
    show: {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.1
        }
    }
};

const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 0.1,
            ease: "easeIn"

        }
    }
};
const glassVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        scale: 1
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 0.5
        }
    }
}
const getHover = (scale, y) => {
    return {
        scale: scale,
        y: y,
        transition: {
            ease: "easeIn",
            duration: 0.5
        },
    }
}
const WorkTemplate = () => {
    return (
        <WorkContainer variants={container} initial="hidden" animate="show" whileHover="hover" >
            <CommingSoon >
                <Glass variants={{ ...glassVariants, hover: getHover(1.0001, -30) }} />
                <Glass1 variants={{ ...glassVariants, hover: getHover(1.0001, -15) }} />
                <Glass2 variants={{ ...glassVariants, hover: getHover(1.0001, 5) }} />
                <Glass3 variants={{ ...glassVariants, hover: getHover(1.0001, 20) }} >
                    WORK IN PROGRESS
                </Glass3>
                <Circle variants={circleVariants} id="circle1" height="12rem" width="12rem" top=" 40%" right="20%" />
                <Circle variants={circleVariants} id="circle2" height="15rem" width="15rem" left="7%" bottom="20%" />
                <Circle variants={circleVariants} id="circle3" height="4rem" width="4rem" top="13%" />
                <Circle variants={circleVariants} id="circle4" height="7rem" width="7rem" bottom="0" right="0" />
                <Circle variants={circleVariants} id="circle5" height="12rem" width="12rem" top=" 30%" left="-6rem" />
                <Circle variants={circleVariants} id="circle6" height="10rem" width="10rem" left="15%" bottom="3%" />
                <Circle variants={circleVariants} id="circle7" height="4rem" width="4rem" top="33%" />
                <Circle variants={circleVariants} id="circle8" height="3rem" width="3rem" bottom="35%" right="60%" />
            </CommingSoon>
        </WorkContainer>
    );
}

export default WorkTemplate;