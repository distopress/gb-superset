const SvgErase = (props) => (
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
			d="M21 21H9M15.889 14.89 8.464 7.463M2.893 12.607l9.193-9.193a2 2 0 0 1 2.828 0l4.95 4.95a2 2 0 0 1 0 2.828l-9.243 9.243a1.93 1.93 0 0 1-2.728 0l-5-5a2 2 0 0 1 0-2.828"
		/>
	</svg>
);
export default SvgErase;
