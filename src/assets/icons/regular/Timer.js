const SvgTimer = (props) => (
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
			d="M9 2h6M12 10v4M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
		/>
	</svg>
);
export default SvgTimer;
