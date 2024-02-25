import { useContext, useState, useEffect } from 'react';
import ControlContext from './ControlContext';

// This is a functional component that uses the ControlContext to get and set group objects
export default (props) => {
    // Destructure get and set from the context
    const { get, set } = useContext(ControlContext);

    // Create a state variable for groupObject with initial value from get function or an empty object
    const [groupObject, setGroupObjectState] = useState(get(props.name, null) ?? {});

    // Function to set the groupObject state
    const setGroupObject = (newObject) => {
        setGroupObjectState(prevGroupObject => ({
            ...prevGroupObject,
            ...newObject
        }));
    }

    // Use useEffect to set the groupObject in the context when it changes
    useEffect(() => {
        if (typeof groupObject === 'object') {
            set(props.name, groupObject, null);
        }
    }, [groupObject]);

    // Render the component
    return (
        <div className='gb-superset-group-control-container'>
            {/* Map over the children and clone them with additional props */}
            {React.Children.map(props.children, child => {
                return React.cloneElement(
                    child,
                    {
                        ...child.props,
                        attributes: groupObject,
                        setAttributes: setGroupObject
                    }
                );
            })}
        </div>
    );
}