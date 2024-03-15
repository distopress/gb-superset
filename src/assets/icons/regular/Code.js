const SvgCode = (props) => (
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
			d="M13.5 6 10 18.5M6.5 8.5 3 12l3.5 3.5M17.5 8.5 21 12l-3.5 3.5"
		/>
	</svg>
);
export default SvgCode;
