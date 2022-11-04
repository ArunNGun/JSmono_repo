import react from 'react';
import Eye from '../../components/svgComponent/Eye';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { CursorContainer } from './styles'

const Cursor = ({ variants, animate,
    transition, cursorText }) => {
    return (<CursorContainer variants={variants} animate={animate}
        transition={transition}
    >
        {cursorText === 'eye' ? <Eye /> : cursorText}
    </CursorContainer>);
}

export default Cursor;