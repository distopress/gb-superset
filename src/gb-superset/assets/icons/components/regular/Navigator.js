const SvgNavigator = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<circle cx={12} cy={12} r={10} stroke="currentColor" />
		<path
			stroke="currentColor"
			d="M17.873 15.475c.46.87-.437 1.831-1.336 1.432l-4.538-2.017-4.537 2.017c-.9.4-1.797-.562-1.337-1.432l4.959-9.365a1.036 1.036 0 0 1 1.831 0z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgNavigator;
