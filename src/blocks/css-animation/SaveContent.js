import { __ } from '@wordpress/i18n';

export default function content({ get, attributes, blockProps }) {

	const animate = `animate__animated${get('delayAnimate') && ` animate__delay-` + get('delayAnimate')}${get('animateType') && ` animate__`+ get('animateType')}${get('repeatAnimate') === 'infinite' ? ' animate__infinite' : ` animate__repeat-${get('repeatAnimate')}` || ' animate__repeat-1'}`;

	return (
		<div className={`gb-superset-css-animation ${get('enableAnimation') ? animate : '' }`}>
			<p>animateDuration: {get('animateDuration')}</p>
			{__('I am super Block CSS Animation!', 'gb-superset')}
			<pre>{JSON.stringify({ attributes }, null, 2)}</pre>
		</div>
	);
}