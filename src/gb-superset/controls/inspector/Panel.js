import { PanelBody } from '@wordpress/components';

export default (props) => {
    return (
        <PanelBody {...props}>
            {props.children}
        </PanelBody>
    );
}