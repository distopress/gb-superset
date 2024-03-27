const SvgHandBrake = (props) => (
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
			d="M12 16v-4M12 9V8"
		/>
		<circle cx={12} cy={12} r={8} stroke="currentColor" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5M20.047 4.5A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"
		/>
	</svg>
);
export default SvgHandBrake;
