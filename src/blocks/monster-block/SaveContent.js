import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {
	return (
		<>
			{__('I am Monster Block', 'gb-superset')}
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</>
	);
}