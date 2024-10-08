const SvgOnTag = (props) => (
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
		<path stroke="currentColor" d="M9 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14 15V9l4 6V9"
		/>
	</svg>
);
export default SvgOnTag;
