import { __experimentalText as Text } from '@wordpress/components';

export default (props) => {
  return (
    <Text {...props} className='gb-superset-text'>
      {props.children}
    </Text>
  );
}