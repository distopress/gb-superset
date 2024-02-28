import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-box-control">
      <BoxControl {...props} />
    </ControlContainer>
  );
}