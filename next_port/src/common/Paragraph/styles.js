import styled from 'styled-components'
import { space, layout, color } from 'styled-system'
import { motion } from 'framer-motion'

export const ParaContainer = styled.p`
font-size:24px;
// font-family: 'Alfa Slab One', cursive;
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 0.80rem;
line-height: 19px;
word-spacing: 1px;
letter-spacing: 0.2px;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
// color: rgba(227, 236, 255, 0.7);
color:rgb(116, 112, 131);
${space}
${layout}
${color}
`