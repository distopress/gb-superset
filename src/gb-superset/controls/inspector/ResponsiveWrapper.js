import { ResponsiveWrapper } from '@wordpress/components';

export default (props) => {

  return (
    <ResponsiveWrapper className="gb-superset-responsive-wrapper" {...props} >
      { props.children }
    </ResponsiveWrapper>
  );
}