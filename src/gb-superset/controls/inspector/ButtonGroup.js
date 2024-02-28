import { ButtonGroup } from '@wordpress/components';

export default (props) => {
  return (
    <ButtonGroup className="gb-superset-button-group">
      { props.children }
    </ButtonGroup>
  );
}