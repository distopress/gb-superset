import { DatePicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'currentDate'} changeProp={'onChange'} className="gb-superset-date-picker">
      <DatePicker
        {...props}
      />
    </ControlContainer>
  );
}