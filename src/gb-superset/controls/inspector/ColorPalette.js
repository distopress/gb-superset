import { ColorPalette } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  const colors = [
    { name: 'White', color: '#ffffff' },
    { name: 'Black', color: '#000000' },
    { name: 'Gray', color: '#808080' },    
  ];

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-color-palette">
      <ColorPalette {...props} colors={ colors } />
    </ControlContainer>
  );
}