import { ExternalLink } from '@wordpress/components';

export default (props) => {
  return (
    <ExternalLink {...props} className="gb-superset-externalLink">
      { props.children }
    </ExternalLink>
  );
}