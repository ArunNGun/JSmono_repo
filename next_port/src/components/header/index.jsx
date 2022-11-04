import React from 'react'
import LOGO from '../svgComponent/Logo'
import Text from '../../common/Text/Text'
import Git from '../svgComponent/Git'
import Insta from '../svgComponent/Insta'
import Linkdin from '../svgComponent/Linkdin'
import { ContactBlock, LogoBlock, HeaderContainer, NavLinksBlock, SocialBlock, HeaderLeft, HeaderRight } from './styles'
import Box from '../../common/Box/Box'

const Header = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <LogoBlock>
                    <Box p="0" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <LOGO fillOne="#F2F2F2" fillTwo='#F2F2F2' />
                    </Box>
                </LogoBlock>
                <NavLinksBlock>
                    <Text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>ABOUT</Text>
                    <Text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>WORK</Text>
                </NavLinksBlock>
            </HeaderLeft>
            <HeaderRight>
                <SocialBlock>
                    <Git />
                    <Insta />
                    <Linkdin />
                </SocialBlock>
                <ContactBlock>
                    <Text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        GET IN TOUCH
                    </Text>
                </ContactBlock>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;