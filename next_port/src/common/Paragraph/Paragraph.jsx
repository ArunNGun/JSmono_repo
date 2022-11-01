import React from 'react'
import { ParaContainer } from './styles'
const Text = ({ children, ...rest }) => {
    return (
        <ParaContainer {...rest}>
            {children}
        </ParaContainer>
    )
}

export default Text;