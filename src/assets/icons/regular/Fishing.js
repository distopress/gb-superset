const SvgFishing = (props) => (
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
			d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v10c0 6-10 6-10 0v-4l2 2"
		/>
	</svg>
);
export default SvgFishing;
