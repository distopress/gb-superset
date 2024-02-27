import { RadioControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({ options, ...props }) => {
  
  const option = options.map(option => {
    const value = option.replace(/\s+/g, '-').toLowerCase();
    return { label: option, value };
  });

  return (
    <ControlContainer {...props} valueProp={'selected'} changeProp={'onChange'} className="gb-superset-number-control">
      <RadioControl 
        {...props}
        options={option} 
      />
    </ControlContainer>
  );
}