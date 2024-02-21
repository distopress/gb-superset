import {
    TextControl,
} from '@wordpress/components';
import React, { useContext } from 'react';

import BlockContext from './BlockContext';

export default (props) => {

    const context = useContext(BlockContext);

    const changeHandler = (newValue) => {
        context.changeHandler(props.name, newValue);
        // context.setAttributes({[props.name]: newValue});
    }

    return (
        <TextControl 
            {...props}
            value={ context.attributes[props.name] }
            onChange={ changeHandler }
        />
    );
}
