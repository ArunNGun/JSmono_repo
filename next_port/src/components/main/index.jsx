import React from "react";
import Hand from "../svgComponent/Hand";
import Paragraph from "../../common/Paragraph/Paragraph";
import Box from "../../common/Box/Box";
import { MainContainer, MainLeft, MainRight } from "./styles";
import { rotateScrollMotion, scrollMotion } from "../motion";
import MainAni from './MainAni'

const Main = ({ onMouseEnter, onMouseLeave, bgColor, animate, transition, bgVariant, textAnimate, textVariants, animatePath }) => {

    return (
        <MainContainer>
            <MainLeft>
                <MainAni transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }} layoutId='main-image-1' />
            </MainLeft>
            <MainRight variants={bgVariant} animate={animate} transition={transition} bgColor={bgColor} initial="rest" whileHover="hover" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Box p="2rem">
                    <Box>
                        <Box mb="2rem">
                            <Box animate width="fit-content" variants={rotateScrollMotion(-35, -49)}>
                                <Hand animatePath={animatePath} />
                            </Box>
                        </Box>
                        <Box variants={scrollMotion(-49)}>
                            <Paragraph animate={textAnimate} variants={textVariants} transition={transition}>
                                Hi, I am Arun Kumar. A Digital Craftsman & Creative Engineer
                                creating digital experiences with an eye for design and creative
                                solutions.
                            </Paragraph>
                        </Box>
                    </Box>
                </Box>
            </MainRight>
        </MainContainer >
    );
};

export default Main;
