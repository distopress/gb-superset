const SvgChatBubbleXmark = (props) => (
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
			d="m9.5 14.5 2.493-2.5M14.5 9.5 11.993 12m0 0L9.5 9.5m2.493 2.5 2.507 2.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"
		/>
	</svg>
);
export default SvgChatBubbleXmark;
