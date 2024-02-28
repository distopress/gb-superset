import { useState, useEffect } from 'react';
import { ComboboxControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({ controls, ...props }) => {
  const [ filteredOptions, setFilteredOptions ] = useState([]);

  useEffect(() => {
    setFilteredOptions(controls?.map(control => ({ 
      label: control, 
      value: control.toLowerCase(), 
    })));
  }, []);  

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-combobox-control">
      <ComboboxControl 
        {...props}
        options={filteredOptions}
        onInputChange={(v)=>setFilteredOptions(options.filter((option) => option.value === v))}
      />
    </ControlContainer>
  );
}