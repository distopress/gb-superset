import { DuotonePicker, DuotoneSwatch } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  const DUOTONE_PALETTE = [
    { colors: [ '#8c00b7', '#fcff41' ], name: 'Purple and yellow', slug: 'purple-yellow' },
    { colors: [ '#000097', '#ff4747' ], name: 'Blue and red', slug: 'blue-red' },
  ];

  const COLOR_PALETTE = [
    { color: '#ff4747', name: 'Red', slug: 'red' },
    { color: '#fcff41', name: 'Yellow', slug: 'yellow' },
    { color: '#000097', name: 'Blue', slug: 'blue' },
    { color: '#8c00b7', name: 'Purple', slug: 'purple' },
  ];

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-duotone-picker">
      <DuotonePicker
        {...props}
        duotonePalette={ DUOTONE_PALETTE }
        colorPalette={ COLOR_PALETTE }
      />
      <DuotoneSwatch valueProp={'values'} />
    </ControlContainer>
  );
}