const SvgStrikethrough = (props) => (
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
			d="M3 12h18M16.286 3h-6.218a4.068 4.068 0 0 0-1.286 7.927L12 12m-6 9h7.932a4.068 4.068 0 0 0 3.58-6"
		/>
	</svg>
);
export default SvgStrikethrough;
