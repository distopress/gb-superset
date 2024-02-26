import { ButtonGroup } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer className="gb-superset-button-group">
      <ButtonGroup>
        { props.children }
      </ButtonGroup>
    </ControlContainer>
  );
}