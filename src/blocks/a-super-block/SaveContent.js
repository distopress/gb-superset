import { __ } from '@wordpress/i18n';

export default function content( { attributes, blockProps } ) {
	const { content, align, backgroundColor, textColor } = attributes;
	return (
		<div { ...blockProps } style={ { textAlign: align, backgroundColor: backgroundColor, color: textColor } }>
			{ __( 'Hello from the editor!', 'gb-superset' ) }
			<h3>{content}</h3>
		</div>
	);
}