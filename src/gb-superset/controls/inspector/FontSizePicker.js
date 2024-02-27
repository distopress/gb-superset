import { FontSizePicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-font-size-picker">
      <FontSizePicker {...props} />
    </ControlContainer>
  );
}