import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'

export const HeaderContainer = styled(motion.div)`
display:flex;
height:12%;
background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
${space}
${layout}
${color}
`
export const HeaderLeft = styled(motion.div)`
display:flex;
width:65%;
height:100%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

border-right: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
export const HeaderRight = styled(motion.div)`
width:35%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

display:flex;
${space}
${layout}
${color}
`
export const LogoBlock = styled(motion.div)`
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

border-right: 0.5px solid rgba(30, 36, 53, 1);
width: 52%;
display:flex;
align-items:center;
padding-left:45px;
${space}
${layout}
${color}
`
export const NavLinksBlock = styled(motion.div)`
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

width:48%;
display: flex;
align-items:center;
justify-content:center;
gap: 2.5rem;
${space}
${layout}
${color}
`
export const SocialBlock = styled(motion.div)`
display: flex;
align-items:center;
justify-content: center;
gap: 1rem;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

border-right: 0.5px solid rgba(30, 36, 53, 1);
width:50%;
`
export const ContactBlock = styled(motion.div)`
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

width:50%;
display: flex;
align-items:center;
justify-content: center;
`