const SvgPathArrow = (props) => (
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
			d="M18 16.5V3m0 0 3.5 3.5M18 3l-3.5 3.5M18 16.5a3.5 3.5 0 1 1-7 0v-9M11 7.5a3.5 3.5 0 1 0-7 0v12"
		/>
	</svg>
);
export default SvgPathArrow;
