import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';

import ControlContext from './ControlContext';
import getObject from './getObject';
import setObject from './setObject';

// This is a functional component that uses the ControlContext to get and set values
export default (props) => {

    // Destructure get and set from the context
    let { get, set } = useContext(ControlContext);

    // If attributes and setAttributes props are provided, override get and set
    if(props.attributes && props.setAttributes) {
        get = (name, scope) => getObject(name, scope, props.attributes);
        set =(name, value, scope) => setObject(name, value, scope, props.attributes, props.setAttributes);
    }

    // Create a state variable for scope with initial value 'desktop'
    const [scope, setScope] = useState('desktop');

    // Handler function for changing the scope
    const scopeHandler = (scope, e) => {
        e.preventDefault();
        setScope(scope);
    }

    // Use useEffect to log when the scope changes
    useEffect(() => {
        console.log('scope has changed', scope);
    }, [scope]);

    // Render the component
    return (
        <div {...props} className={classNames(props.extraClassName, props.className, 'gb-superset-control-container')}>
            {props.responsive && (
                <p>
                    {/* Links for changing the scope */}
                    <a onClick={(e) => scopeHandler('desktop', e)}>Desktop</a>
                    <a onClick={(e) => scopeHandler('tablet', e)}>Tablet</a>
                    <a onClick={(e) => scopeHandler('mobile', e)}>Mobile</a>
                </p>
            )}
            {/* Map over the children and clone them with additional props */}
            {React.Children.map(props.children, child => {
                return React.cloneElement(
                    child,
                    {
                        ...child.props,
                        [props.valueProp]: get(props.name, scope),
                        [props.changeProp]: (value) => set(props.name, value, scope)
                    }
                );
            })}
        </div>
    );
}