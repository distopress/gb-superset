import { FormToggle } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

    const isChecked = (newValue, currentValue) => {
        return ! currentValue;
    }

    return (
        <ControlContainer {...props}
            valueProp={'checked'}
            changeProp={'onChange'}
            beforeSave={isChecked}
            className="gb-superset-text-control"
            >
            <FormToggle
                {...props}
            />
        </ControlContainer>
    );
}
