import React from 'react'
import LOGO from '../svgComponent/Logo'
import Text from '../../common/Text/Text'
import Git from '../svgComponent/Git'
import Insta from '../svgComponent/Insta'
import Linkdin from '../svgComponent/Linkdin'
import { ContactBlock, LogoBlock, HeaderContainer, NavLinksBlock, SocialBlock, HeaderLeft, HeaderRight } from './styles'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <LogoBlock>
                    <LOGO />
                </LogoBlock>
                <NavLinksBlock>
                    <Text>ABOUT</Text>
                    <Text>WORK</Text>
                </NavLinksBlock>
            </HeaderLeft>
            <HeaderRight>
                <SocialBlock>
                    <Git />
                    <Insta />
                    <Linkdin />
                </SocialBlock>
                <ContactBlock>
                    <Text>
                        GET IN TOUCH
                    </Text>
                </ContactBlock>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;