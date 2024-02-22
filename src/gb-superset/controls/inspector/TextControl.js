import {
    TextControl,
} from '@wordpress/components';
import React, { useContext } from 'react';

import BlockContext from '../../supports/BlockContext';
import ControlContainer from '../../supports/ControlContainer';

export default (props) => {

    const context = useContext(BlockContext);

    const changeHandler = (value) => {
        context.changeHandler(props.name, newValue);
        // context.setAttributes({[props.name]: newValue});
    }

    return (
        <ControlContainer>
            <TextControl 
                {...props}
                // label={props.foo}
                value={ context.attributes[props.name] }
                onChange={ changeHandler }
            />
        </ControlContainer>
    );
}
