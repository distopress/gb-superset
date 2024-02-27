import { DateTimePicker, TimePicker, DatePicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({container, ...props}) => {
  return (
    <ControlContainer {...props} valueProp={'currentDate'} changeProp={'onChange'} className="gb-superset-date-time-picker">
      {
        container ? 
        <>
          { container === 'time' && <TimePicker {...props} /> }
          { container === 'datetime' && <DateTimePicker {...props} /> }
        </> 
        : <DatePicker {...props} />
      }
      
    </ControlContainer>
  );
}