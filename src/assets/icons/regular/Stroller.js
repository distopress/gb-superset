const SvgStroller = (props) => (
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
			d="M11.5 3a8.5 8.5 0 0 0-7.212 13M18.713 16A8.46 8.46 0 0 0 20 11.5v-2h2.5M8 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M11.5 3v9M3.5 12h16"
		/>
	</svg>
);
export default SvgStroller;
