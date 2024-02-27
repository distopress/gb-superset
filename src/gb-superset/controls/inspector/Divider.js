import { __experimentalDivider as Divider } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default () => {
  return (
    <ControlContainer className="gb-superset-divider">
      <Divider />
    </ControlContainer>
  );
}