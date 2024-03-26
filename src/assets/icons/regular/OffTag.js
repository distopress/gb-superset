const SvgOffTag = (props) => (
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
			d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"
		/>
		<path stroke="currentColor" d="M7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 15V9h3M17 15V9h3M12 12h2.572M17 12h2.572"
		/>
	</svg>
);
export default SvgOffTag;
