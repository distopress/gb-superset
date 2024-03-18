import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {
	return (
		<div className='gb-suerset-css-transfromation'>
			{__('I am super Block CSS Transformation!', 'gb-superset')}
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</div>
	);
}