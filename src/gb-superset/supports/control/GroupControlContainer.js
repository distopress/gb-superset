import { useContext, useState, useEffect } from 'react';
import ControlContext from './ControlContext';

export default (props) => {
    const { get, set } = useContext(ControlContext);
    const [groupObject, setGroupObjectSingle] = useState(get(props.name, null) ?? {});

    const setGroupObject = (newObject) => {
        setGroupObjectSingle({
            ...groupObject,
            ...newObject
        });
    }

    useEffect(() => {
        if (typeof groupObject === 'object') {
            set(props.name, groupObject, null);
        }
    }, [groupObject]);

    return (
        <div className='gb-superset-group-control-container'>
            {React.Children.map(props.children, child => {
                let controlGroups = [
                    React.cloneElement(
                        child,
                        {
                            ...child.props,
                            attributes: groupObject,
                            setAttributes: setGroupObject
                        }
                    )
                ];
                return controlGroups;
            })}
        </div>
    );
}