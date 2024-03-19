import { useEffect, useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { ControlContainer } from '@gb-superset/supports/control';
import fonts from '../../../assets/fonts';

export default (props) => {
  const { loadFont } = props;

  console.log(loadFont.desktop);

	return (
		<ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-font-family-control">
			<SelectControl
        {...props}
        options={ [
          { label: 'Select...', value: '' },
          ...fonts
        ] }
      />
		</ControlContainer>
	);
}
