import { ColorPicker } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'color'} changeProp={'onChange'} className="gb-superset-color-picker">
      <ColorPicker {...props} />
    </ControlContainer>
  );
}