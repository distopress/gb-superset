const SvgBinocular = (props) => (
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
			d="M21.5 14 20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2-2 2-2 2C4.5 7 4 9 4 9l-1.5 5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
	</svg>
);
export default SvgBinocular;
