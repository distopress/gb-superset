import { useContext, useState, useId, useEffect } from 'react';
import classNames from 'classnames';

import ControlContext from './ControlContext';
import getObject from './getObject';
import setObject from './setObject';

// This is a functional component that uses the ControlContext to get and set values
export default (props) => {

    // Destructure get and set from the context
    let { get, set } = useContext(ControlContext);

    const beforeSave = props.beforeSave || ((n, c) => n);

    // If attributes and setAttributes props are provided, override get and set
    if (props.attributes && props.setAttributes) {
        get = (name, scope) => getObject(name, scope, props.attributes);
        set = (name, value, scope) => setObject(name, value, scope, props.attributes, props.setAttributes);
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

    const childId = 'gb-superset-inspector-control-' + props.name + useId();

    // Render the component
    return (
        <div {...props} className={classNames(props.extraClassName, props.className, 'gb-superset-inspector-control')}>
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
                
                const currentValue = get(props.name, scope);
                const setNewValue = (newValue) => {
                    set(props.name, beforeSave(newValue, currentValue), scope)
                };

                delete child.props?.label;
                delete child.props?.help;
                delete child.props?.extraClassName;

                child.props.id = childId;
                child.props.autoComplete = 'off';

                child.props.className = 'gb-superset-inspector-control__component-component';

                // Clone the child element and add additional props
                const component = React.cloneElement(child, {
                    ...child.props,
                    [props.valueProp]: currentValue,
                    [props.changeProp]: (newValue) => setNewValue(newValue)
                });

                return (
                    <div className="gb-superset-inspector-control__component-container">
                        {/* Render label if it's defined */}
                        {props.label && props.labelPosition === "top" && 
                            <label className='gb-superset-inspector-control__component-label' htmlFor={childId}>
                                {props.label}
                            </label>
                        }

                        {/* Render the child controls */}
                        <div 
                            className='gb-superset-inspector-control__component-field' 
                            style={{ display: `${props.labelPosition === "top" ? 'inline':'flex'}` }}
                        >
                            {props.label && props.labelPosition === "inline" &&
                                <label className='gb-superset-inspector-control__component-label' htmlFor={childId}>
                                    {props.label}
                                </label>
                            }

                            {component}
                        </div>

                        {/* Render help text if it's defined */}
                        {props.help && 
                            <small className='gb-superset-inspector-control__component-help'>
                                {props.help}
                            </small>
                        }
                    </div>
                )
            })}
        </div>
    );
}