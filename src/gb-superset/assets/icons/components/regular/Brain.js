const SvgBrain = (props) => (
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
			d="M7 14a3 3 0 1 0 1 5.83"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.264 15.605a4 4 0 0 1-.874-6.636M3.42 8.888A2.5 2.5 0 0 1 7 5.5M7.238 5.565A2.5 2.5 0 1 1 12 4.5V20M8 20a2 2 0 1 0 4 0M12 7a3 3 0 0 0 3 3M17 14a3 3 0 1 1-1 5.83"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19.736 15.605a4 4 0 0 0 .874-6.636M20.58 8.888A2.5 2.5 0 0 0 17 5.5M12 4.5a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0"
		/>
	</svg>
);
export default SvgBrain;
