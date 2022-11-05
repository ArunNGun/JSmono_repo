import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'

export const FooterContent = styled(motion.div)`
display: flex;
background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

width: 100%;
height: 32%;
${space}
${layout}
${color}
`
export const FooterLeft = styled(motion.div)`
width:70%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
border-right: 0.5px solid rgba(30, 36, 53, 1);
display:flex;
justify-content: space-between;
${space}
${layout}
${color}
`
export const FooterRight = styled(motion.div)`
width:30%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
${space}
${layout}
${color}
`