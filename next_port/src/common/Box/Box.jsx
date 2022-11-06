import { animate } from 'framer-motion'
import React from 'react'
import { BoxContainer, BoxContainerAnimate } from './styles'
const Box = ({ children, animate = false, ...rest }) => {
    return (
        animate ? (
            <BoxContainerAnimate {...rest}>
                {children}
            </BoxContainerAnimate>)
            :
            (<BoxContainer {...rest}>
                {children}
            </BoxContainer>)
    )
}

export default Box;