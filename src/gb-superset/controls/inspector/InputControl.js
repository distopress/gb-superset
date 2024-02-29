import { __experimentalInputControl as InputControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-input-control">
      <InputControl
        {...props}
      />
    </ControlContainer>
  );
}