import React from "react";
import Box from "../../common/Box/Box";
import { HugeText } from "../../common/Text/Text";
import Cross from "../svgComponent/Cross";
import Arrow from "../svgComponent/Arrow";
import { FooterContent, FooterLeft, FooterRight } from "./styles";
import { scrollMotion, rotateMotion } from "../motion";

const Footer = ({ aboutEnter, aboutLeave, workEnter, WorkLeave, bgColor, bgVariant, animate,
    transition, textVariants, textAnimate, pathVariants, animatePath }) => {
    return (
        <FooterContent>
            <FooterLeft variants={bgVariant} bgColor={bgColor} id="footerleft" onMouseEnter={aboutEnter}
                onMouseLeave={aboutLeave} initial="rest" whileHover="hover" animate={animate} transition={transition}>
                <Box
                    width="65%"
                    height="100%"
                    display="flex"
                    // justifyContent="center"
                    pl="4rem"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="4px"
                        height="89px"
                        overflowx="hidden"
                        overflowY="hidden"
                    >
                        <Box variants={scrollMotion(-89)}>
                            <HugeText animate={textAnimate} variants={textVariants} transition={transition}>
                                DIGITAL <br />
                                CRAFTSMAN
                            </HugeText>
                        </Box>
                        <Box variants={scrollMotion(-89)}>
                            <HugeText animate={textAnimate} variants={textVariants} transition={transition}>
                                CREATIVE <br />
                                ENGINEER
                            </HugeText>
                        </Box>
                    </Box>
                </Box>
                <Box
                    width="25%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box pr="30%">
                        <Box animate={false} width="100%" maxWidth="200px" variants={rotateMotion(90)}>
                            <Cross animatePath={animatePath} variants={pathVariants} transition={transition} fill="#f2f2f2" />
                        </Box>
                    </Box>
                </Box>
            </FooterLeft>
            <FooterRight variants={bgVariant} bgColor={bgColor} onMouseEnter={workEnter}
                onMouseLeave={WorkLeave} initial="rest" whileHover="hover" animate={animate} transition={transition}>
                <Box
                    width="85%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box height="2rem" overflowY="hidden">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            variants={scrollMotion()}
                        >
                            <HugeText animate={textAnimate} variants={textVariants} transition={transition} fontSize="2rem" lineHeight="2rem">
                                WORK
                            </HugeText>
                            <Box width="15%" pl="0.75rem">
                                <Arrow animatePath={animatePath} />
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            variants={scrollMotion()}
                        >
                            <HugeText animate={textAnimate} variants={textVariants} transition={transition} fontSize="2rem" lineHeight="2rem">
                                WORK
                            </HugeText>
                            <Box width="12%" pl="0.75rem">
                                <Arrow animatePath={animatePath} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </FooterRight>
        </FooterContent>
    );
};

export default Footer;
