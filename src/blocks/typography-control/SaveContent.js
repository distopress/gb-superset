import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {
	return (
		<div className='gb-suerset-typography-control'>
			{__('I am super Block Typography Control!', 'gb-superset')}
			<p><b>Text for Font-Family Check:</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</div>
	);
}