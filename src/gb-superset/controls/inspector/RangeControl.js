import { RangeControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-range-control">
      <RangeControl 
        {...props} 
        showTooltip={false}
      />
    </ControlContainer>
  );
}