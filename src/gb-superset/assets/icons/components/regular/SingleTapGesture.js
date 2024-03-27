const SvgSingleTapGesture = (props) => (
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
			d="M12 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4 7.29C5.496 5.039 8.517 3.5 12 3.5s6.504 1.539 8 3.79"
		/>
	</svg>
);
export default SvgSingleTapGesture;
