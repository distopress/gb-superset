const SvgPerspectiveView = (props) => (
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
			d="M1 21 4.143 3h15.714L23 21zM2 16.5h20M3 12h18M4 7.5h16M12 3v18M8 3.5l-1.5 17M16 3.5l1.5 17"
		/>
	</svg>
);
export default SvgPerspectiveView;
