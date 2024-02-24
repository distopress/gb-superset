import React, { useContext } from 'react';

import ControlContext from './ControlContext';

export default (props) => {

    const {get, set} = useContext(ControlContext);

    return (
        <div className="control-container">
            {React.Children.map(props.children, child => {
                let controlGroups = [
                    React.cloneElement(
                        child, 
                        {
                            ...child.props, 
                            [props.valueProp]: get(props.name),
                            [props.changeProp]: (value) => set(props.name, 'desktop', value)
                        }
                    )
                ];

                if (props.responsive === true) {
                    controlGroups = [
                        ...controlGroups,
                        React.cloneElement(
                            child, 
                            {
                                ...child.props, 
                                [props.valueProp]: get(props.name, 'tablet'),
                                [props.changeProp]: (value) => set(props.name, 'tablet', value)
                            }
                        ),
                        React.cloneElement(
                            child, 
                            {
                                ...child.props, 
                                [props.valueProp]: get(props.name, 'mobile'),
                                [props.changeProp]: (value) => set(props.name, 'mobile', value)
                            }
                        )
                    ];
                }

                return controlGroups;
            })}
        </div>
    );
}