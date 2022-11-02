import React from 'react'
import { ParaContainer } from './styles'
const Paragraph = ({ children, ...rest }) => {
    return (
        <ParaContainer {...rest}>
            {children}
        </ParaContainer>
    )
}

export default Paragraph;