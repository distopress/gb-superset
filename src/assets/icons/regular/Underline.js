const SvgUnderline = (props) => (
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
			d="M16 5v6a4 4 0 0 1-4 4v0a4 4 0 0 1-4-4V5M6 19h12"
		/>
	</svg>
);
export default SvgUnderline;
