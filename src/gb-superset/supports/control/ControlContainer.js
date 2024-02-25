import { useContext, useState, useEffect } from 'react';

import ControlContext from './ControlContext';
import getObject from './getObject';
import setObject from './setObject';

export default (props) => {

    let { get, set } = useContext(ControlContext);

    if(props.attributes && props.setAttributes) {
        get = (name, scope) => getObject(name, scope, props.attributes);
        set =(name, value, scope) => setObject(name, value, scope, props.attributes, props.setAttributes);
    }

    // Create a state variable
    const [scope, setScope] = useState('desktop');

    const scopeHandler = (scope, e) => {
        e.preventDefault();
        setScope(scope);
    }

    // Use useEffect to track changes to scope
    useEffect(() => {
        console.log('scope has changed', scope);
    }, [scope]);

    return (
        <div className="gb-superset-control-container">
            <p>
                <a onClick={(e) => scopeHandler('desktop', e)}>Desktop</a>
                <a onClick={(e) => scopeHandler('tablet', e)}>Tablet</a>
                <a onClick={(e) => scopeHandler('mobile', e)}>Mobile</a>
            </p>
            {React.Children.map(props.children, child => {
                let controlGroups = [
                    React.cloneElement(
                        child,
                        {
                            ...child.props,
                            [props.valueProp]: get(props.name, scope),
                            [props.changeProp]: (value) => set(props.name, value, scope)
                        }
                    )
                ];
                return controlGroups;
            })}
        </div>
    );
}