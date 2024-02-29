import { TimePicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'currentDate'} changeProp={'onChange'} className="gb-superset-time-picker">
      <TimePicker
        {...props}
      />
    </ControlContainer>
  );
}