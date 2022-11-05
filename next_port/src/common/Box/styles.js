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
& :hover{
    
}
>span{
    border-raduis: 50%;
    border: "1px solid rgba(151, 126, 242, 5)";
}
& svg{
    transition: 0.5s;
}
& svg:hover {
    // background:rgba(151, 126, 242, .15);
    height:120%;
    width:120%;
}
${color}
${space}
${layout}
`