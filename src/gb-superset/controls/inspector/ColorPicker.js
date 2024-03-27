import { ColorPicker } from '@wordpress/components';
import { useContext, useState, useId, useEffect } from 'react';
import { ControlContainer, ControlContext } from '@gb-superset/supports/control';
import { createStyleSheet, breakpoints } from '@gb-superset/block-assets-manager/styleSheet';

export default (props) => {
  const { setPrefilledStyles } = useContext(ControlContext);


  useEffect(() => {
    setPrefilledStyles({
      color: 'red',
    })
  }, []);

  return (
    <ControlContainer {...props} valueProp={'color'} changeProp={'onChange'} className="gb-superset-color-picker">
      <ColorPicker {...props} />
    </ControlContainer>
  );
}