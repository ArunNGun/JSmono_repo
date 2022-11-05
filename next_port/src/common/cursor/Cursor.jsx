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
        {cursorText === 'eye' ? <Box height="48px" width="48px">
            <Eye />
        </Box>
            : cursorText}
    </CursorContainer>);
}

export default Cursor;