import { useContext, useState, useEffect } from 'react';
import { TextControl } from '@gb-superset/controls/inspector';
import { ControlContext, GroupControlContainer } from '@gb-superset/supports/control';

export default (props) => {
    return (
        <GroupControlContainer {...props}>
            <TextControl
                {...props}
                name={'control1'}
                label="My Text Field 1"
            />
            <TextControl
                {...props}
                name={'control2'}
                label="My Text Field 2"
            />
        </GroupControlContainer>
    );
}