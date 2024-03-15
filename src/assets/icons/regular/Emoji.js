const SvgEmoji = (props) => (
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
			d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
		/>
	</svg>
);
export default SvgEmoji;
