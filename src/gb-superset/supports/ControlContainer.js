import React, { useContext } from 'react';

import BlockContext from './BlockContext';

export default (props) => {
    const context = useContext(BlockContext);

    return (
        <div className="control-container">
            {React.Children.map(props.children, child => {
                props.foo = 'bar';
                let cloneElements = [
                    React.cloneElement(child, { ...child.props, value: 'bar'}),
                    React.cloneElement(child, { ...child.props, value: 'foo'})
                ];

                return cloneElements;
            })}
        </div>
    );
}