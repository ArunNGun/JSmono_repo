import React from 'react'
import LOGO from '../svgComponent/Logo'
import Text from '../../common/Text/Text'
import Git from '../svgComponent/Git'
import Insta from '../svgComponent/Insta'
import Linkdin from '../svgComponent/Linkdin'
import { ContactBlock, LogoBlock, HeaderContainer, NavLinksBlock, SocialBlock, HeaderLeft, HeaderRight } from './styles'
import Box from '../../common/Box/Box'

const Header = ({ onMouseEnter, onMouseLeave, bgColor, animate, transition, bgVariant, textVariants, textAnimate, animatePath }) => {
    return (
        <HeaderContainer>
            <HeaderLeft variants={bgVariant} animate={animate} transition={transition}>
                <LogoBlock bgColor={bgColor}>
                    <Box p="0" animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <LOGO animatePath={animatePath} fillOne="#F2F2F2" fillTwo='#F2F2F2' />
                    </Box>
                </LogoBlock>
                <NavLinksBlock bgColor={bgColor}>
                    <Text animate={textAnimate} variants={textVariants} transition={transition} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>ABOUT</Text>
                    <Text animate={textAnimate} variants={textVariants} transition={transition} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>WORK</Text>
                </NavLinksBlock>
            </HeaderLeft>
            <HeaderRight variants={bgVariant} animate={animate} transition={transition}>
                <SocialBlock bgColor={bgColor} variants={bgVariant} animate={animate} transition={transition}>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Git animatePath={animatePath} />
                    </Box>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Insta animatePath={animatePath} />
                    </Box>
                    <Box animate onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Linkdin animatePath={animatePath} />
                    </Box>
                </SocialBlock>
                <ContactBlock bgColor={bgColor} variants={bgVariant} animate={animate} transition={transition}>
                    <Text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={textAnimate} variants={textVariants} transition={transition}>
                        GET IN TOUCH
                    </Text>
                </ContactBlock>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;