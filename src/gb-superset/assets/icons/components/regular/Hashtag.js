const SvgHashtag = (props) => (
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
			d="M10 3 6 21M20.5 16h-18M22 7H4M18 3l-4 18"
		/>
	</svg>
);
export default SvgHashtag;
