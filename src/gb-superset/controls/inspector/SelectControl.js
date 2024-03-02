import { SelectControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-focal-point-picker">
      <SelectControl {...props} />
    </ControlContainer>
  );
}