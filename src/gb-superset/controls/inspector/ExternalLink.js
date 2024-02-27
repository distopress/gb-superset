import { ExternalLink } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({children, ...props}) => {
  return (
    <ControlContainer {...props} className="gb-superset-externalLink">
      <ExternalLink {...props} >
        { children }
      </ExternalLink>
    </ControlContainer>
  );
}