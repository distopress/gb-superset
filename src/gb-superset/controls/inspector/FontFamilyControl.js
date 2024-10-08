import WebFont from "webfontloader";
import { useEffect, useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';
import fonts from '../../../assets/fonts';

export default (props) => {
  const { loadFont } = props;

  useEffect(() => {
    if (loadFont) {      
      WebFont.load({
        google: {
          families: [loadFont],
        },
        context: frames["editor-canvas"],
      });
    }
  }, [loadFont]);

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
