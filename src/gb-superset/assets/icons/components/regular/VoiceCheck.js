const SvgVoiceCheck = (props) => (
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
			d="M12 3v16M8 8v6M20 9v4M4 9v4M16 6v9M15.5 19.5l2 2 5-5"
		/>
	</svg>
);
export default SvgVoiceCheck;
