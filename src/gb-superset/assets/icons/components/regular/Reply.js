const SvgReply = (props) => (
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
			d="M2 10h14c8 0 8 11 0 11M2 10l7-7m-7 7 7 7"
		/>
	</svg>
);
export default SvgReply;
