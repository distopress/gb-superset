import { __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  const colors = [
    { name: 'White', color: '#ffffff' },
    { name: 'Black', color: '#000000' },
    { name: 'Gray', color: '#808080' },    
  ];

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-border-box-control">
      <BorderBoxControl {...props} colors={colors} />
    </ControlContainer>
  );
}