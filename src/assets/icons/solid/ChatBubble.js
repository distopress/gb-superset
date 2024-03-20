const SvgChatBubble = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788c1.525.83 3.274 1.301 5.13 1.301 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m5 9.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M10.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M7 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgChatBubble;
