import { DateTimePicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'currentDate'} changeProp={'onChange'} className="gb-superset-date-time-picker">
      <DateTimePicker
        {...props}
      />
    </ControlContainer>
  );
}