const SvgDatabase = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="currentColor" d="M5 12v6s0 3 7 3 7-3 7-3v-6" />
		<path stroke="currentColor" d="M5 6v6s0 3 7 3 7-3 7-3V6" />
		<path
			stroke="currentColor"
			d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3Z"
		/>
	</svg>
);
export default SvgDatabase;
