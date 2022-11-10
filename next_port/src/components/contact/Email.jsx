import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Box from '../../common/Box/Box';
import EmailSVG from '../svgComponent/EmailSVG';
import EmailSVGOpen from '../svgComponent/EmailSVGOpen';
import Triangle from '../svgComponent/Triangle';

const InnerEmailContainer = styled(motion.div)`
width:100%;
height:100;
position: relative;
`
const EmailContainer = styled(motion.div)`
position: absolute;
width:60%;
height:80%;
top:10%;
right:5%;
border-radius:25px;
display:flex;
backdrop-filter: blur(21px);
filter:blur(0.1px);
border-radius: 16px;

`


const Email = ({ variantsHide, variantsShow }) => {

    return (
        <EmailContainer>

            <Box height="100%" width="100%" variants={variantsHide} position="absolute">
                <EmailSVG />
            </Box>
            <Box height="100%" width="100%" variants={variantsShow} position="absolute">
                <EmailSVGOpen />
            </Box>

        </EmailContainer>

    );
}

export default Email;