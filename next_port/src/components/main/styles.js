import styled, { keyframes } from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'


export const MainContainer = styled(motion.div)`
display:flex;
background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
color:red;
width:100%;
height:56%;
border-top: 0.5px solid rgba(30, 36, 53, 1);
border-bottom: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
const breatheAnimation = keyframes`
0% {
    background-position: 0% 50%
    }
  50% {
  background-position: 100% 50%
  }
  100% {
  background-position: 0% 50%
  }
`
export const MainAnimation = styled(motion.div)`
height:100%;
width:100%;
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
animation-name: ${breatheAnimation};
 animation-duration: 8s;
 animation-iteration-count: infinite;

`

export const MainLeft = styled(motion.div)`
width:70%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

// background: linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));
border-right: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`

export const MainRight = styled(motion.div)`
width:30%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
color: inherit;
display:flex;
align-items:flex-end;
${space}
${layout}
${color}
`