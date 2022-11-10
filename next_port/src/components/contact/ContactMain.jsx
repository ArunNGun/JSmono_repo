import { motion } from 'framer-motion';
import React from 'react';
import Box from '../../common/Box/Box';
import { HugeText } from '../../common/Text/Text';
import Email from './Email';
import { ContactMainContainer, Circle, ContactMainFormRight, ContactMainLeft, ContactMainRight, Circle1, Circle2, Circle3, Circle4 } from './styles';


const ContactMain = () => {

    const circleVariantsL = {
        show: { left: 0, transition: { ease: "linear", duration: 7, repeat: Infinity, repeatType: "reverse" } }
    };
    const circleVariantsR = {
        show: { left: 0, transition: { ease: "linear", duration: 5, repeat: Infinity, repeatType: "reverse" } }
    };

    const circleVariantsU = {
        show: { top: 0, transition: { ease: "linear", duration: 9, repeat: Infinity, repeatType: "reverse" } }
    };
    const circleVariantsD = {
        show: { top: 0, transition: { ease: "linear", duration: 19, repeat: Infinity, repeatType: "reverse" } }
    };

    ////////\
    const variantsShow = {
        initial: {
            opacity: 0
        },
        hover: {
            opacity: 1,
            transition: { duration: 2, type: "tween" }
        }
    }
    const variantsHide = {
        initial: {
            opacity: 1

        },
        hover: {
            opacity: 0,
            transition: { duration: 2, type: "tween" }

        }
    }

    return (
        <ContactMainContainer>
            <ContactMainLeft initial="initial" animate="animate" whileHover="hover">
                <HugeText>GET IN TOUCH</HugeText>

                <Email variantsShow={variantsShow} variantsHide={variantsHide} />
            </ContactMainLeft>
            <ContactMainRight hidden="hidden" animate="show">
                <Circle1 variants={circleVariantsL} top="0" right="0" id="circle1" height="6rem" width="6rem"></Circle1>
                <Circle2 variants={circleVariantsR} bottom="0" right="0" id="circle2" height="8rem" width="8rem"></Circle2>
                <Circle3 variants={circleVariantsU} bottom="0" right="0" id="circle3" height="12rem" width="12rem"></Circle3>
                <Circle4 variants={circleVariantsD} bottom="0" left="0" id="circle4" height="11rem" width="11rem"></Circle4>
                <ContactMainFormRight>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <HugeText>Contact Me</HugeText>
                    </Box>
                    <Box gap="0.5rem" display="flex" width="70%" flexDirection="column">
                        <label htmlFor="name" >NAME</label>
                        <input type="text" id="name" />
                    </Box>
                    <Box display="flex" gap="0.5rem" width="70%" flexDirection="column">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="text" id="email" />
                    </Box>
                    <Box display="flex" width="70%" gap="0.5rem" flexDirection="column">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea id="message" name="message" rows="4">
                        </textarea>
                    </Box>
                    <Box width="70%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <button type='submit'>Submit</button>
                    </Box>
                </ContactMainFormRight>
            </ContactMainRight>
        </ContactMainContainer>
    );
}

export default ContactMain;