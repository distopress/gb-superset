import { Button } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({ children, ...Props }) => {
  return (
    <ControlContainer {...Props} className="gb-superset-button">
      <Button {...Props}>
        { children }
      </Button>
    </ControlContainer>
  );
}