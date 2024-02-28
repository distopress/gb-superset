import { Button } from '@wordpress/components';

export default (props) => {
  return (
    <Button {...props} className="gb-superset-button">
      { props.children }
    </Button>
  );
}