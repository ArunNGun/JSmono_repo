import styled from 'styled-components'
import { motion } from 'framer-motion'
import { layout, color, space } from 'styled-system'

export const ContactMainContainer = styled(motion.div)`
display:flex;
background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
color:red;
width:100%;
height:56%;
border-top: 0.5px solid rgba(30, 36, 53, 1);
border-bottom: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
export const ContactMainLeft = styled(motion.div)`
width:65%;
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};

// background: linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));
border-right: 0.5px solid rgba(30, 36, 53, 1);
${space}
${layout}
${color}
`
export const ContactMainRight = styled(motion.div)`
width:35%;
height:100%;
background: linear-gradient(80deg, #162c6a, #b08fd6);
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
color: inherit;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
${space}
${layout}
${color}
position: relative;
`
export const ContactMainFormRight = styled(motion.div)`
// background:${({ bgColor = "linear-gradient(0deg, #050A18, #050A18);" }) => bgColor};
width: 100%;
height: 100%;
color: inherit;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
background: rgba(17, 25, 40, 0.3);
backdrop-filter: blur(40px);
box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
overflow:hidden;
gap: 2em;

label{
    color: "#E3ECFF";
    font-size:14px;
}

input {
    width: 100%;
    outline: none;
    border: none;
    border: 1px solid rgba(151, 126, 242, 0.2);
    background: rgba(151, 126, 242, 0.05);
    padding: 8px 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
input:focus {
    width: 100%;
    outline: none;
    border: none;
    border: 1px solid rgba(151, 126, 242, 1);
    background: rgba(151, 126, 242, 0.05);
    padding: 8px 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

textarea {
    width: 100%;
    outline: none;
    border: none;
    border: 1px solid rgba(151, 126, 242, 0.2);
    background: rgba(151, 126, 242, 0.05);
    padding: 8px;
    border-radius: 15px;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
textarea:focus{
    border: 1px solid rgba(151, 126, 242, 1);

}

button {
    background: linear-gradient(115deg, 
        rgba(0,0,0,0.10), 
        rgba(151, 126, 242, 0.2));
    
        color: "#E3ECFF";
    max-width: 80%;
    padding: 8px 10px;
    border-radius:15px;
    border: 1px solid rgba(151, 126, 242, 0.5);
    box-shadow: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 1.5s;
}
button:focus{
    border: 1px solid rgba(151, 126, 242, 0.5);
}

${space}
${layout}
${color}
`
export const Circle1 = styled(motion.div)`
  height:20%;
  width:20%;
  border-radius: 50%;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(80deg, #ebe9ee, #a42322);
  backdrop-filter: blur(15rem);
  filter: blur(0.1rem);
  left:${({ left }) => left};
  top:${({ top }) => top};
  bottom:${({ bottom }) => bottom};
  right:${({ right }) => right};
  margin: -5px -10px -10px -5px
  ${color}
${space}
${layout}
`
export const Circle2 = styled(motion.div)`
  height:20%;
  width:20%;

  filter: blur(0.1rem);
  border-radius: 50%;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(80deg, #a42322, #34278d);
  backdrop-filter: blur(5rem);
  left:${({ left }) => left};
  top:${({ top }) => top};
  bottom:${({ bottom }) => bottom};
  right:${({ right }) => right};
  margin: -5px -10px -10px -5px
  ${color}
${space}
${layout}
`
export const Circle3 = styled(motion.div)`
  height:20%;
  width:20%;
  border-radius: 50%;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(80deg, rgb(192, 60, 165), #ebe9ee);
  backdrop-filter: blur(15rem);
  left:${({ left }) => left};
  top:${({ top }) => top};
  bottom:${({ bottom }) => bottom};
  right:${({ right }) => right};
  
  filter: blur(0.1rem);
  ${color}
${space}
${layout}
`
export const Circle4 = styled(motion.div)`
  height:20%;
  width:20%;
  border-radius: 50%;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(80deg, #e0d3ef, rgb(192, 60, 165));
  backdrop-filter: blur(1rem);
  filter: blur(0.1rem);
  left:${({ left }) => left};
  top:${({ top }) => top};
  bottom:${({ bottom }) => bottom};
  right:${({ right }) => right};
  ${color}
${space}
${layout}
`

const ContactFooterContainer = styled(motion.div)`

`