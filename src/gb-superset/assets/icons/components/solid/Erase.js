const SvgErase = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M21 21H9"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m14.914 3.414 4.95 4.95a2 2 0 0 1 0 2.828l-9.243 9.243a1.93 1.93 0 0 1-2.728 0l-5-5a2 2 0 0 1 0-2.828L7 8.5l4.75 4.75a1.768 1.768 0 1 0 2.5-2.5L9.5 6l2.586-2.586a2 2 0 0 1 2.828 0"
		/>
	</svg>
);
export default SvgErase;
