const SvgShareAndroid = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
		/>
		<path
			stroke="currentColor"
			strokeWidth={1.5}
			d="m15.5 6.5-7 4M8.5 13.5l7 4"
		/>
	</svg>
);
export default SvgShareAndroid;
