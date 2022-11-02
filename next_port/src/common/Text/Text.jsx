import React from 'react'
import { TextContainer, HugeTextContainer } from './styles'
const Text = ({ children, ...rest }) => {
    return (
        <TextContainer {...rest}>
            {children}
        </TextContainer>
    )
}
export const HugeText = ({ children, ...rest }) => {
    return (
        <HugeTextContainer {...rest}>
            {children}
        </HugeTextContainer>
    )
}

export default Text;