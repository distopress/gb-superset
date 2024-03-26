const SvgReduce = (props) => (
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
			d="m4 20 5-5m0 0v4m0-4H5M20 4l-5 5m0 0V5m0 4h4"
		/>
	</svg>
);
export default SvgReduce;
