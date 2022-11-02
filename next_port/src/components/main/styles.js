import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'


export const MainContainer = styled(motion.div)`
display:flex;
background: linear-gradient(0deg, #050A18, #050A18);
width:100%;
height:56%;
border-top: 0.5px solid rgba(30, 36, 53, 1);
border-bottom: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
export const MainLeft = styled(motion.div)`
width:70%;
// background: linear-gradient(0deg, #050A18, #050A18);
background: linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));
border-right: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
export const MainRight = styled(motion.div)`
width:30%;
background: linear-gradient(0deg, #050A18, #050A18);
display:flex;
align-items:flex-end;
${space}
${layout}
${color}
`