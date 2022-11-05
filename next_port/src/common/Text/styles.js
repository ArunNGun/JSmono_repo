import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'

export const HugeTextContainer = styled(motion.div)`
font-family: 'Alfa Slab One', cursive;
line-height:${({ lineHeight = '45px' }) => lineHeight};
font-size:${({ fontSize = '52px' }) => fontSize};
// color: rgba(227, 236, 255, 0.7);
// color:rgb(242, 242, 242)
`
export const TextContainer = styled(motion.div)`
font-size:${({ fontSize = '24px' }) => fontSize};
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 0.80rem;
line-height: 19px;
letter-spacing:1px;
padding: 1.1rem 2rem;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
// color: rgba(227, 236, 255, 0.7);
// color:rgb(242, 242, 242)
${space}
${layout}
${color}
`