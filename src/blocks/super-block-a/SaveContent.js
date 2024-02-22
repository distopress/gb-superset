import { __ } from '@wordpress/i18n';

export default function content( { attributes, blockProps } ) {
	const { content, align, backgroundColor, textColor } = attributes;
	return (
		<div { ...blockProps } style={ { textAlign: align, backgroundColor: backgroundColor, color: textColor } }>
			{ __( 'I am super Block #A!', 'gb-superset' ) }
			<pre>{JSON.stringify({content}, null, 2)}</pre>
		</div>
	);
}