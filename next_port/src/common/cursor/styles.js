import styled from "styled-components"
import { motion } from 'framer-motion'

export const CursorContainer = styled(motion.div)`
display: block;
position: absolute;
height: 24px;
width:24px;
pointer-events:none;
border-radius:50%;
background:white;
`