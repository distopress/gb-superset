import WebFont from "webfontloader";
import { useEffect, useState, useContext } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

import { ControlContainer, ControlContext } from '@gb-superset/supports/control';
import fonts from './webfonts.json';

export default (props) => {
  const { get } = useContext(ControlContext);
  
  const loadFont = get(props.name);

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
