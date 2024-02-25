import { PanelBody } from '@wordpress/components';

export default (props) => {
    return (
        <PanelBody {...props} className='gb-superset-panel'>
            {props.children}
        </PanelBody>
    );
}