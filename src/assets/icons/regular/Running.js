const SvgRunning = (props) => (
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
			d="M15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12.613 8.267l-3.308 4.135 4.135 4.135-2.067 4.55"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m6.41 9.508 3.387-3.309 2.816 2.068 2.895 3.308h3.722M8.892 15.71l-1.241.827H4.343"
		/>
	</svg>
);
export default SvgRunning;
