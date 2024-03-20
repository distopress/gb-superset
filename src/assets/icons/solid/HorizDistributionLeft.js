const SvgHorizDistributionLeft = (props) => (
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
			d="M19 7v10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M19 17V7m0 10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H19m0 10v3m0-13V4"
		/>
		<path
			fill="currentColor"
			d="M9 7v10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M9 17V7m0 10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H9m0 10v3M9 7V4"
		/>
	</svg>
);
export default SvgHorizDistributionLeft;
