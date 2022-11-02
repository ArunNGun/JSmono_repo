import React from 'react'
import { BoxContainer } from './styles'
const Box = ({ children, ...rest }) => {
    return (
        <BoxContainer {...rest}>
            {children}
        </BoxContainer>
    )
}

export default Box;