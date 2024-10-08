const SvgDeliveryTruck = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			d="M8 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1M5.65 17H3.6a.6.6 0 0 1-.6-.6v-4.9"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2 9h4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"
		/>
	</svg>
);
export default SvgDeliveryTruck;
