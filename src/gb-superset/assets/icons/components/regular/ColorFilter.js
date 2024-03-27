const SvgColorFilter = (props) => (
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
			d="M12 14.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
		/>
	</svg>
);
export default SvgColorFilter;
