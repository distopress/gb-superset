const SvgDashboardSpeed = (props) => (
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
			d="M12 4v4M4 8l2.5 2.5M17.5 10.5 20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.96 9.96 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
		/>
	</svg>
);
export default SvgDashboardSpeed;
