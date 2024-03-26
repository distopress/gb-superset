import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {
	return (
		<>
			<h1 className='test'>{__('I am super Block #A!', 'gb-superset')}</h1>
			<p>content: {get('content')}</p>
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</>
	);
}