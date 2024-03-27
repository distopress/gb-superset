const SvgNavigatorAlt = (props) => (
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
			d="M13.93 17.869c-.322.93-1.637.929-1.958-.001l-1.62-4.694-4.57-1.943c-.905-.385-.814-1.698.136-1.954L16.15 6.516a1.036 1.036 0 0 1 1.249 1.34z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgNavigatorAlt;
