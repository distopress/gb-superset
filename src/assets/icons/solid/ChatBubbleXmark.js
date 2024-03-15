const SvgChatBubbleXmark = (props) => (
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
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788c1.525.83 3.274 1.301 5.13 1.301 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-1.969 7.72a.75.75 0 0 0-1.062 1.06L10.934 12l-1.965 1.97a.75.75 0 1 0 1.062 1.06l1.963-1.97 1.976 1.971a.75.75 0 1 0 1.06-1.062L13.055 12l1.975-1.969a.75.75 0 1 0-1.06-1.062l-1.976 1.97z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgChatBubbleXmark;
