import { TextControl } from '@wordpress/components';

import {ControlContainer} from '@gb-superset/supports/control';

export default (props) => {

    return (
        <ControlContainer { ...props } valueProp={'value'} changeProp={'onChange'}>
            <TextControl 
                { ...props }
            />
        </ControlContainer>
    );
}