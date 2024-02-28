import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-alignment-matrix-control">
      <AlignmentMatrixControl {...props} />
    </ControlContainer>
  );
}