import { ResizableBox } from '@wordpress/components';

export default (props) => {

  return (
    <ResizableBox className="gb-superset-resizable-box" {...props} >
      { props.children }
    </ResizableBox>
  );
}