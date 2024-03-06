import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {
	return (
		<>
			{__('I am super Block Sagor 2!', 'gb-superset')}
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</>
	);
}