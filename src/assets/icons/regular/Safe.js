const SvgSafe = (props) => (
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
			d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6M18 14v-4M12.5 9.5l1-1M7.5 9.5l-1-1M6.5 15.5l1-1M13.5 15.5l-1-1M2 8h1M2 6h1M3 16H2M3 18H2"
		/>
	</svg>
);
export default SvgSafe;
