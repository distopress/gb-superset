const SvgRoundedMirror = (props) => (
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
			d="M20 10v4a8 8 0 1 1-16 0v-4a8 8 0 1 1 16 0M17.5 4.5 13 8M19 7l-7.5 6"
		/>
	</svg>
);
export default SvgRoundedMirror;
