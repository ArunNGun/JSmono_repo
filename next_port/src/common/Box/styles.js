import styled from 'styled-components'
import { color, space, layout } from 'styled-system'
import { motion } from 'framer-motion'

export const BoxContainer = styled(motion.div)`
align-items:${({ alignItems }) => alignItems};
justify-content:${({ justifyContent }) => justifyContent};
flex-direction:${({ flexDirection = "row" }) => flexDirection};
gap:${({ gap = "" }) => gap};
overflow:${({ overflow = "" }) => overflow};
overflow-y:${({ overflowY = "" }) => overflowY};
overflow-x:${({ overflowX = "" }) => overflowX};
${color}
${space}
${layout}
`