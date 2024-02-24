import { __ } from '@wordpress/i18n';

export default function content( { get, attributes, blockProps } ) {
	// useEffect(() => {
	// 	console.log('content', attributes);
	// }, [attributes]);

	return (
		<>
			{ __( 'I am super Block #A!', 'gb-superset' ) }
			<p>content: {get('content')}</p>
			<pre>{JSON.stringify({attributes}, null, 2)}</pre>
		</>
	);
}