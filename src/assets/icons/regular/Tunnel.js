const SvgTunnel = (props) => (
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
			d="M21 20 3 14"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M16 10v1M12 9v1M8 8v1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 21h18v-9a9 9 0 1 0-18 0z"
		/>
	</svg>
);
export default SvgTunnel;
