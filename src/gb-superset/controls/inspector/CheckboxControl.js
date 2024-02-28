import { CheckboxControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'checked'} changeProp={'onChange'} className="gb-superset-checkbox">
      <CheckboxControl {...props} />
    </ControlContainer>
  );
}