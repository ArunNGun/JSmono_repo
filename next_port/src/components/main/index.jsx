import React from "react";
import Hand from "../svgComponent/Hand";
import Paragraph from "../../common/Paragraph/Paragraph";
import Box from "../../common/Box/Box";
import { MainContainer, MainLeft, MainRight } from "./styles";
import { rotateScrollMotion, scrollMotion } from "../motion";

const Main = () => {
    const rotateAndScrollMotion = () => {

    }
    return (
        <MainContainer>
            <MainLeft></MainLeft>
            <MainRight initial="rest" whileHover="hover" animate="rest">
                <Box p="2rem">
                    <Box>
                        <Box mb="2rem">
                            <Box width="fit-content" variants={rotateScrollMotion(-35, -49)}>
                                <Hand />
                            </Box>
                        </Box>
                        <Box variants={scrollMotion(-49)}>
                            <Paragraph>
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
