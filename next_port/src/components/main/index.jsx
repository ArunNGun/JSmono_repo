import React from 'react'
import Hand from '../svgComponent/Hand'
import ParaContainer from '../../common/Paragraph/Paragraph'
import { MainContainer, MainLeft, MainRight } from './styles'
const Main = () => {
    return (
        <MainContainer>
            <MainLeft>left</MainLeft>
            <MainRight>
                <div style={{ padding: "2rem" }}>
                    <Hand />
                    <ParaContainer>
                        Hi, I am Arun Kumar. A Digital Craftsman & Software Engineer creating digital experiences with an eye for design and creative solutions.
                    </ParaContainer>
                </div>
            </MainRight>
        </MainContainer>);
}

export default Main;